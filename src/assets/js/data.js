const data = {
    navlinks: [
        {
            name: "о ресноте",
            url: "/about"
        },
        {
            name: "каталог",
            url: "/catalog"
        },
        {
            name: "наши сотрудники",
            url: "/workers"
        },
        {
            name: "отзывы",
            url: "/reviews"
        }
    ],
    catalogLinks: [
        {
            icon: '<i class="fal fa-star"></i>',
            name: "хиты продаж"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "скидки"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "новинки"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "колбасные и мясные изделия"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "молочные продукты"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "морепродукты"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "пиво"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "pамороженные продукты"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "vед"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "cвежие овощи"
        },
        {
            icon: '<i class="fal fa-star"></i>',
            name: "cвежие фрукты"
        }
    ],
    products: [
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 660,
            discount: 15,
            status: 'xit',
            imageUrl: "img/catalog/products/product-1.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 780,
            discount: 15,
            status: 'new',
            imageUrl: "img/catalog/products/product-2.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 450,
            discount: 15,
            status: 'sale',
            imageUrl: "img/catalog/products/product-3.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 780,
            discount: 15,
            status: 'new',
            imageUrl: "img/catalog/products/product-2.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 450,
            discount: 15,
            status: 'sale',
            imageUrl: "img/catalog/products/product-3.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 660,
            discount: 15,
            status: 'xit',
            imageUrl: "img/catalog/products/product-1.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        }
    ],
    selectedProducts: [
    ],
    selectedProdPrice: function() {
        let summaryPrice = 0
        if (this.selectedProducts.length) {
            this.selectedProducts.forEach(product => {
                summaryPrice += product.salePrice()
            });
        } else {
            return summaryPrice = 0
        }

        return summaryPrice
    },
    recomendedProducts: [
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 780,
            discount: 15,
            status: 'new',
            imageUrl: "img/catalog/products/product-2.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 450,
            discount: 15,
            status: 'sale',
            imageUrl: "img/catalog/products/product-3.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 660,
            discount: 15,
            status: 'xit',
            imageUrl: "img/catalog/products/product-1.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 450,
            discount: 15,
            status: 'sale',
            imageUrl: "img/catalog/products/product-3.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 660,
            discount: 15,
            status: 'xit',
            imageUrl: "img/catalog/products/product-1.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 780,
            discount: 15,
            status: 'new',
            imageUrl: "img/catalog/products/product-2.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 450,
            discount: 15,
            status: 'sale',
            imageUrl: "img/catalog/products/product-3.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        },
        {
            name: 'говядина, кусок с/к',
            ingredient: 'смесь посолочная (соль, нитрит натрия), коньяк, натуральные специи, сахар.',
            price: 780,
            discount: 15,
            status: 'new',
            imageUrl: "img/catalog/products/product-2.png",
            economedPrice() {
                return Math.round(this.discount * this.price / 100);
            },
            salePrice() {
                return this.price - this.economedPrice()
            },
        }
    ],
    productCatalogCards: [
        {
            title: 'колбасные и мясные изделия',
            text: 'цена от 150 ₽ 56 товаров',
            img: 'img/home/main/catalog/colbasa.png'
        },
        {
            title: 'молочные продукты',
            text: 'сыры, десерты, йогурты, кисломолочная продукция, молоко, сметана, творог, творожная масса',
            img: 'img/home/main/catalog/milky.png'
        },
        {
            title: 'морепродукты',
            text: 'рыба, икра, креветки',
            img: 'img/home/main/catalog/fish.png'
        },
        {
            title: 'энергетик',
            text: 'крафтовое энергетик',
            img: 'img/home/main/catalog/energetic.png'
        },
        {
            title: 'Замороженные продукты',
            text: 'Замороженные овощи, Замороженные фркуты',
            img: 'img/home/main/catalog/fruits.png'
        },
        {
            title: 'мёд',
            text: 'мед горный 0,25 кг, мед с облепихой 0,25 кг, мед с черникой 0,25 кг, мед с разнотравья 0,25 кг, мед цветочный 0,25 кг',
            img: 'img/home/main/catalog/honey.png'
        },
        {
            title: 'свежие овощи',
            text: 'картофель, огурцы, помидоры',
            img: 'img/home/main/catalog/vegetables.png'
        },
        {
            title: 'свежие фрукты',
            text: 'сезонные яблоки',
            img: 'img/home/main/catalog/fresh-fruits.png'
        },
    ],
    Certificates: [
        {
            img: 'img/reviews/main/certificates/certificate-1.png',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-2.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-3.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-4.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-5.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-6.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-7.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        },
        {
            img: 'img/reviews/main/certificates/certificate-8.svg',
            text: 'благодарственное письмо ООО «благодарочка»'
        }
    ],
    FooterLinks: [
        {
            name: 'колбасные и мясные изделия',
            url: '/catalog'
        },
        {
            name: 'замороженные продукты',
            url: '/catalog'
        },
        {
            name: 'молочные продукты',
            url: '/catalog'
        },
        {
            name: 'мед',
            url: '/catalog'
        },
        {
            name: 'морепродукты',
            url: '/catalog'
        },
        {
            name: 'свежие овощи',
            url: '/catalog'
        },
        {
            name: 'пиво',
            url: '/catalog'
        },
        {
            name: 'свежие фрукты',
            url: '/catalog'
        }
    ],
    FooterWebLinks: [
        {
            icon: '<i class="fa fa-facebook-f"></i>',
            url: "https://www.facebook.com/",
            name: 'facebook'
        },
        {
            icon: '<i class="fa fa-vk"></i>',
            url: "https://vk.com/",
            name: 'vk'
        },
        {
            icon: '<i class="fa fa-instagram"></i>',
            url: "https://www.instagram.com/",
            name: 'instagram'
        }
    ],
    Workers: [
        {
            job: "Генеральный директор",
            name: 'Константинопольский Константин Константинович',
            img: 'img/workers/director.png',
            role: 'Руководство'
        },
        {
            job: "Главный бухгалтер",
            name: 'Алексеева Татьяна Михайловна',
            img: 'img/workers/accountant.png',
            role: 'Коммерческий Отдел'
        },
        {
            job: "Руководитель отдела продаж",
            name: 'Иванов Дмитрий Алексеевич',
            img: 'img/workers/salary-blog.png',
            role: 'Отдел Оценки'
        },
        {
            job: "Менеджер",
            name: 'Михайлова Александра Дмитриевна',
            img: 'img/workers/manager-1.png',
            role: 'Отдел Оценки'
        },
        {
            job: "Менеджер",
            name: 'Константинопольский Константин Константинович',
            img: 'img/workers/manager-2.png',
            role: 'Отдел Оценки'
        },
        {
            job: "Менеджер",
            name: 'Алексеева Татьяна Михайловна',
            img: 'img/workers/manager-3.png',
            role: 'Отдел Оценки'
        },
        {
            job: "Отдел снабжения",
            name: 'Иванов Дмитрий Алексеевич',
            img: 'img/workers/supplies-blog-1.png',
            role: 'Коммерческий Отдел'
        },
        {
            job: "Отдел снабжения",
            name: 'Михайлова Александра Дмитриевна',
            img: 'img/workers/supplies-blog-2.png',
            role: 'Коммерческий Отдел'
        }
    ]
}

export default data