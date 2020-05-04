Vue.component('img-card', {
    props: ['title', 'subtitle', 'description', 'image', 'status', 'cart'],
    data: function () {
        return {
            inCart: this.cart
        }
    },
    template: '<div class="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg relative select-none">\n' +
        '\n' +
        '                <!--img-->\n' +
        '                <div class="w-full h-64 rounded-t-lg bg-orange-300" style="background-position: top center;background-size: cover;" v-bind:style="{ backgroundImage: \'url(\' + image + \')\' }"></div>\n' +
        '\n' +
        '                <!--text info areas -->\n' +
        '                <div class="px-4 pt-4 mb-16 leading-relaxed">\n' +
        '                    <h2 class="font-semibold text-lg">{{title}}</h2>\n' +
        '                    <h3 class="text-gray-600 font-light text-sm">{{subtitle}}</h3>\n' +
        '                    <p class="font-light text-sm">{{description}}</p>\n' +
        '                </div>\n' +
        '\n' +
        '                <!--call to action link-->\n' +
        '                <div class="absolute bottom-0">\n' +
        '                    <div class="p-4 h-auto">\n' +
        '                        <a v-on:click="$emit(\'add-cart\')" v-if="this.cart==false" class="text-blue-600 hover:text-blue-800 transition-colors duration-150 cursor-pointer font-medium text-sm">\n' +
        '                            <svg class="inline-block stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"\n' +
        '                                      stroke-width="1.25" stroke-linecap="round"\n' +
        '                                      stroke-linejoin="round"/>\n' +
        '                            </svg>\n' +
        '                            Add to cart</a>\n' +
        '                        <a v-on:click="$emit(\'remove-cart\')" v-if="this.cart==true" class="text-gray-500 hover:text-gray-600 transition-colors duration-150 cursor-pointer font-medium text-sm">\n' +
        '                            <svg class="inline-block stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20"\n' +
        '                                      stroke-width="1.25" stroke-linecap="round"\n' +
        '                                      stroke-linejoin="round"/>\n' +
        '                            </svg>\n' +
        '                            Remove from cart</a>\n' +

        '                    </div>\n' +
        '                </div>\n' +
        '            </div>'
});

Vue.component('success', {
    props: ['title', 'description'],
    template: '<div class="rounded-md bg-green-100 border border-green-500 p-4">\n' +
        '            <div class="flex">\n' +
        '                <div class="flex-shrink-0">\n' +
        '                    <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">\n' +
        '                        <path fill-rule="evenodd"\n' +
        '                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"\n' +
        '                              clip-rule="evenodd"/>\n' +
        '                    </svg>\n' +
        '                </div>\n' +
        '                <div class="ml-3">\n' +
        '                    <h3 class="text-sm leading-5 font-medium text-green-800">\n' +
        '                        {{title}}\n' +
        '                    </h3>\n' +
        '                    <div class="mt-2 text-sm leading-5 text-green-700">\n' +
        '                        <p>\n' +
        '                            {{description}}\n' +
        '                        </p>\n' +
        '                    </div>\n' +
        '                    <div class="mt-4">\n' +
        '                        <div class="-mx-2 -my-1.5 flex">\n' +
        '                            <button class="px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150">\n' +
        '                                Dismiss\n' +
        '                            </button>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
});

Vue.component('success-modal', {
    props: ['title', 'description'],
    template: '<div class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"\n' +
        '             style="z-index: 1000">\n' +
        '            <!--\n' +
        '              Background overlay, show/hide based on modal state.\n' +
        '\n' +
        '              Entering: "ease-out duration-300"\n' +
        '                From: "opacity-0"\n' +
        '                To: "opacity-100"\n' +
        '              Leaving: "ease-in duration-200"\n' +
        '                From: "opacity-100"\n' +
        '                To: "opacity-0"\n' +
        '            -->\n' +
        '\n' +
        '            <div class="fixed inset-0 transition-opacity">\n' +
        '                <div class="absolute inset-0 bg-gray-500 opacity-75"></div>\n' +
        '            </div>\n' +
        '\n' +
        '            <!--\n' +
        '              Modal panel, show/hide based on modal state.\n' +
        '\n' +
        '              Entering: "ease-out duration-300"\n' +
        '                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"\n' +
        '                To: "opacity-100 translate-y-0 sm:scale-100"\n' +
        '              Leaving: "ease-in duration-200"\n' +
        '                From: "opacity-100 translate-y-0 sm:scale-100"\n' +
        '                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"\n' +
        '            -->\n' +
        '            <div class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6">\n' +
        '                <div>\n' +
        '                    <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-200">\n' +
        '                        <svg class="h-6 w-6 text-green-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">\n' +
        '                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>\n' +
        '                        </svg>\n' +
        '                    </div>\n' +
        '                    <div class="mt-3 text-center sm:mt-5">\n' +
        '                        <h3 class="text-lg leading-6 font-medium text-gray-900">\n' +
        '                            {{title}}\n' +
        '                        </h3>\n' +
        '                        <div class="mt-2">\n' +
        '                            <p class="text-sm leading-5 text-gray-500">\n' +
        '                                {{description}}\n' +
        '                            </p>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="mt-5 sm:mt-6">\n' +
        '      <span class="flex w-full rounded-md shadow-sm">\n' +
        '        <button v-on:click="$emit(\'clicked\')" type="button"\n' +
        '                class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline transition ease-in-out duration-150 sm:text-sm sm:leading-5">\n' +
        '          Done\n' +
        '        </button>\n' +
        '      </span>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>'
});

Vue.component('text-card', {
    props: ['title', 'subtitle', 'description', 'status', 'cart'],
    data: function () {
        return {
            inCart: this.cart
        }
    },
    template: '<div class="w-full bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg relative select-none">\n' +
        '\n' +
        '\n' +
        '                <!--text info areas -->\n' +
        '                <div class="px-4 pt-4 mb-16 leading-relaxed">\n' +
        '                    <h2 class="font-semibold text-lg">{{title}}</h2>\n' +
        '                    <h3 class="text-gray-600 font-light text-sm">{{subtitle}}</h3>\n' +
        '                    <p class="font-light text-sm">{{description}}</p>\n' +
        '                </div>\n' +
        '\n' +
        '                <!--call to action link-->\n' +
        '                <div class="absolute bottom-0">\n' +
        '                    <div class="p-4 h-auto">\n' +
        '                        <a v-on:click="$emit(\'mark\')" class="text-green-600 hover:text-green-800 transition-colors duration-150 cursor-pointer font-medium text-sm">\n' +
        '                            <svg class="inline-block stroke-current" width="24" height="24" viewBox="0 0 24 24" fill="none"\n' +
        '                                 xmlns="http://www.w3.org/2000/svg">\n' +
        '                                <path d="M5 13L9 17L19 7"\n' +
        '                                      stroke-width="1.5" stroke-linecap="round"\n' +
        '                                      stroke-linejoin="round"/>\n' +
        '                            </svg>\n' +
        '                            Mark as complete</a>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>'
});
