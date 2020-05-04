from django.shortcuts import render
from django.http import HttpResponse
import json
from listings.models import listing, Order
from django.core import serializers


# Create your views here.
def home_view(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        if body['action'] == 'checkout':
            name = body['name']
            phone = body['phone']
            raw_items = body['items']
            items = []

            new_order = Order(name=name, phone=phone)
            new_order.save()

            for item in raw_items:
                new_listing = listing.objects.get(pk=int(item))
                new_listing.pending = True;
                new_listing.save()
                items.append(new_listing)

            for item in items:
                new_order.items.add(item)

            new_order.save()

            return HttpResponse('success')

        if body['action'] == 'mark':
            new_order = Order.objects.get(pk=body['pk'])
            new_order.complete = True
            new_order.save()


    listings_list = listing.objects.filter(pending=False)

    context = {}
    context["listings_json"] = serializers.serialize('json', listings_list)
    if request.user.is_authenticated:
        order_list = Order.objects.filter(complete=False)
        context["order_json"] = serializers.serialize('json', order_list)
        context["orders"] = order_list
    return render(request, 'index.html', context)
