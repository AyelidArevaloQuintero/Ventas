// Productos de ejemplo
        const products = [
            {
                id: 1,
                code: "30910433",
                title: "Crop Top Mujer",
                description: "Camiseta Casual De Cuello Redondo De Color Solido.",
                price: "$28.000",
                category: "mujer",
                icon: "img/30910433.jpg"
            },
            {
                id: 2,
                code: "32621185",
                title: "Camisa Casual Hombre",
                description: "Camisa de tela en varios colores, ideal para el día a día. Cuello redondo.",
                price: "$47.000",
                category: "hombre",
                icon: "img/32621185.jpg"
            },
            {
                id: 3,
                code: "66337490",
                title: "Clip para el cabello de mujer",
                description: "1 pieza Clip para el cabello de mujer elegante con estampado de flor de lirio, diseño floral degradado de moda, color caramelo, estilo bohemio, adecuado para uso diario",
                price: "$8.000",
                category: "accesorios",
                icon: "img/66337490.jpg"
            },
            {
                id: 4,
                code: "10805035",
                title: "Top Tejido",
                description: "Top Tejido de punto acanalado con detalle de ribetes de constraste. Tallas S-XL.",
                price: "$63.000",
                category: "mujer",
                icon: "img/10805035.jpg"
            },
            {
                id: 5,
                code: "3449941",
                title: "Jeans",
                description: "Hombres Jeans con lavado ligero con bolsillo oblicuo.",
                price: "$140.000",
                category: "hombre",
                icon: "img/3449941.jpg"
            },
            {
                id: 6,
                code: "25785623",
                title: "Gafas",
                description: "3 pares de gafas de moda con estilo europeo y estadounidense, con forma cuadrada/triangular, exclusivas y de moda",
                price: "$16.000",
                category: "accesorios",
                icon: "img/25785623.jpg"
            },
            {
                id: 7,
                code: "69204214",
                title: "Camisa",
                description: "Camisa de mujer estilo de oficina casual.",
                price: "$50.000",
                category: "mujer",
                icon: "img/69204214.jpg"
            },
            {
                id: 8,
                code: "46731246",
                title: "Suéter",
                description: "Suéter informal de punto liso con cuello redondo.",
                price: "$75.000",
                category: "mujer",
                icon: "img/46731246.jpg"
            },
            {
                id: 9,
                code: "51929205",
                title: "Camiseta",
                description: "Camiseta ajustada de cuello redondo, manga corta y estilo minimalista.",
                price: "$25.000",
                category: "mujer",
                icon: "img/51929205.jpg"
            },
            {
                id: 10,
                code: "12769536",
                title: "Vestido",
                description: "Vestido ajustado con estampado de letras, de cuello en contraste blanco.",
                price: "$58.000",
                category: "mujer",
                icon: "img/12769536.jpg"
            },
            {
                id: 11,
                code: "11298506",
                title: "Cadena",
                description: "Cadena anti-perdida para audifonos con decoracion de flor.",
                price: "$8.000",
                category: "accesorios",
                icon: "img/11298506.jpg"
            },
            {
                id: 12,
                code: "1025018",
                title: "Soporte para celular",
                description: "Soporte plegable e escritorio pequeño y facil de llevar.",
                price: "$15.000",
                category: "accesorios",
                icon: "img/1025018.jpg"
            },
            {
                id: 13,
                code: "2875867",
                title: "Tapón de polvo",
                description: "Tapón de polvo con diseño de oso lindo, para puerto de carga Tipo-C.",
                price: "$7.000 Una unidad",
                category: "accesorios",
                icon: "img/2875867.jpg"
            },
            {
                id: 14,
                code: "40328192",
                title: "Soporte",
                description: "Soporte de telefono retractil y autoadesivo de flores multicolor.",
                price: "$8.000 Una unidad",
                category: "accesorios",
                icon: "img/40328192.jpg"
            },
            {
                id: 15,
                code: "26129430",
                title: "Soporte",
                description: "Una pieza, soporte adhesivo de pared para cargar los telefonos..",
                price: "$10.000 Una unidad",
                category: "accesorios",
                icon: "img/26129430.jpg"
            },
            {
                id: 16,
                code: "29740000",
                title: "Camisetas",
                description: "Set de dos prendas camiseta de mujer de manga corta y ajustada.",
                price: "$50.000",
                category: "mujer",
                icon: "img/29740000.jpg"
            },
            {
                id: 17,
                code: "2716769",
                title: "Camiseta",
                description: "Camiseta unicolor ribete en forma de lechuga.",
                price: "$35.000 ",
                category: "mujer",
                icon: "img/2716769.jpg"
            },
            {
                id: 18,
                code: "32355650",
                title: "Camiseta",
                description: "Camiseta de verano de manga corta, de cuello asimétrico y corte ajustado plisado.",
                price: "$38.000 ",
                category: "mujer",
                icon: "img/32355650.jpg"
            },
            {
                id: 19,
                code: "73604206",
                title: "Cárdigan",
                description: "Cárdigan de mujer de manga corta con nudo delantero, unicolor.",
                price: "$42.000 ",
                category: "mujer",
                icon: "img/73604206.jpg"
            },
            {
                id: 20,
                code: "59665616",
                title: "Medias",
                description: "3 pares de medias con decoracion de moño arriba del tobillo.",
                price: "$7.000 ",
                category: "mujer",
                icon: "img/59665616.jpg"
            },
            {
                id: 21,
                code: "9867472",
                title: "Gorras",
                description: "Gorra de beisbol bordada de estilo hip-hop Y2K.",
                price: "$15.000 ",
                category: "accesorios",
                icon: "img/9867472.jpg"
            },
            {
                id: 22,
                code: "101224353",
                title: "Jersey",
                description: "Jersey de cuello redondo de manga larga informal.",
                price: "$80.000 ",
                category: "hombre",
                icon: "img/101224353.jpg"
            },
            {
                id: 23,
                code: "26411937",
                title: "Saco",
                description: "Saco unicolor, calido, manga larga informal.",
                price: "$68.000 ",
                category: "hombre",
                icon: "img/26411937.jpg"
            },
            {
                id: 24,
                code: "21234254",
                title: "Camisa Polo",
                description: "Camisa polo casual, sencilla y de cuarto de botón.",
                price: "$74.000 ",
                category: "hombre",
                icon: "img/21234254.jpg"
            },
            {
                id: 25,
                code: "28751025",
                title: "Pantalones",
                description: "Pantalones rectos unicolor para hombre.",
                price: "$74.000 ",
                category: "hombre",
                icon: "img/28751025.jpg"
            },
            {
                id: 26,
                code: "45533654",
                title: "Pulseras",
                description: "Set de 2 pulseras minimalistas de acero inoxidable para hombre.",
                price: "$8.000 ",
                category: "accesorios",
                icon: "img/45533654.jpg"
            },
            {
                id: 27,
                code: "10311256",
                title: "Gorra",
                description: "Gorra de beisbol bordada, estilo Y2k.",
                price: "$17.000 ",
                category: "accesorios",
                icon: "img/10311256.jpg"
            },
            {
                id: 28,
                code: "17707508",
                title: "LLavero",
                description: "Llavero con diesño de tostada, accesorio para decoracion.",
                price: "$8.000 ",
                category: "accesorios",
                icon: "img/17707508.jpg"
            },
            {
                id: 29,
                code: "30887878",
                title: "Camiseta",
                description: "Camiseta manga corta casual para hombre.",
                price: "$58.000 ",
                category: "hombre",
                icon: "img/30887878.jpg"
            },
            {
                id: 30,
                code: "26951253",
                title: "Gafas",
                description: "Gafas de moda retro de estilo Y2k para hombre.",
                price: "$58.000 ",
                category: "accesorios",
                icon: "img/26951253.jpg"
            },
            {
                id: 31,
                code: "45544342",
                title: "Billetera",
                description: "Billetera corta para hombres, casual de gran capacidad.",
                price: "$15.000 ",
                category: "accesorios",
                icon: "img/45544342.jpg"
            },
            {
                id: 32,
                code: "32759931",
                title: "Bolso",
                description: "Bolso de nailon sólido con cierre de cremallera y estampado de mariposa, uso diario.",
                price: "$18.000 ",
                category: "accesorios",
                icon: "img/32759931.jpg"
            },
            {
                id: 33,
                code: "33025105",
                title: "Bolso",
                description: "Bolso de playa tejido con flores y paja.",
                price: "$25.000 ",
                category: "accesorios",
                icon: "img/33025105.jpg"
            },
            {
                id: 34,
                code: "67260534",
                title: "Collar",
                description: "Collar de flor de cinco petalos, con cadena inoxidable.",
                price: "$7.000 ",
                category: "accesorios",
                icon: "img/67260534.jpg"
            },
            {
                id: 35,
                code: "5856916",
                title: "Bolso",
                description: "Bolso de lona de gran capacidad con diseño minimalista.",
                price: "$39.000 ",
                category: "accesorios",
                icon: "img/5856916.jpg"
            },
            {
                id: 36,
                code: "44495819",
                title: "Espejo",
                description: "Espejo de maquillaje portatil.",
                price: "$9.000 ",
                category: "accesorios",
                icon: "img/44495819.jpg"
            },
            {
                id: 37,
                code: "59504154",
                title: "Bolsa de almacenamiento",
                description: "Bolsa para guardar toallas sanitarias o cosmeticos.",
                price: "$6.000 ",
                category: "accesorios",
                icon: "img/59504154.jpg"
            },
            {
                id: 38,
                code: "59414206",
                title: "Atomizador",
                description: "Un atomizador miniatura de perfume recargable  portatil.",
                price: "$8.000 ",
                category: "casa",
                icon: "img/59414206.jpg"
            },
            {
                id: 39,
                code: "30595803",
                title: "Espejo",
                description: "Espejo de forma asimetrica con adhesivo, con 2mm de grueso.",
                price: "$21.000 ",
                category: "casa",
                icon: "img/30595803.jpg"
            },
            {
                id: 40,
                code: "70583310",
                title: "Llavero",
                description: "Lavero de flor de cerezo de metal personalizado.",
                price: "$10.000 ",
                category: "accesorio",
                icon: "img/70583310.jpg"
            },
            {
                id: 41,
                code: "35994643",
                title: "Termo",
                description: "Termo transparente con capacidad de 780ml, bonito y facil de llevar.",
                price: "$10.000 ",
                category: "casa",
                icon: "img/35994643.jpg"
            },
            {
                id: 42,
                code: "68224931",
                title: "Tazade vidrio",
                description: "Taza de paja con tapa de madera y decoracion de lazo, capacidad 500ml.",
                price: "$28.000 ",
                category: "casa",
                icon: "img/68224931.jpg"
            },
            {
                id: 43,
                code: "93682408",
                title: "Manta",
                description: "Una manta de felpa gruesa con rayas, 70cm de Ancho por 100cm de Largo.",
                price: "$45.000 ",
                category: "casa",
                icon: "img/93682408.jpg"
            },
    
        ];

        let currentFilter = 'all';

            function renderProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(product.icon);
        const productImageContent = isImage
            ? `<img src="${product.icon}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; cursor: zoom-in;" onclick="openImageModal('${product.icon}')">`
            : `<div class="product-placeholder">${product.icon}</div>`;

        productCard.innerHTML = `
            <div class="product-image">
                ${productImageContent}
            </div>
            <div class="product-info">
                <div class="product-code">${product.code}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="copy-code-btn" onclick="copyCode('${product.code}')">
                    Copiar Código
                </button>
            </div>
        `;
        grid.appendChild(productCard);
    });
        }

        function filterProducts(category) {
            currentFilter = category;
            
            // Actualizar botones activos
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Filtrar productos
            const filteredProducts = category === 'all' 
                ? products 
                : products.filter(product => product.category === category);
            
            renderProducts(filteredProducts);
        }

        function copyCode(code) {
            navigator.clipboard.writeText(code).then(() => {
                alert(`Código ${code} copiado! Envíalo por WhatsApp: +57 310 792 66 61`);
            }).catch(() => {
                // Fallback para navegadores que no soportan clipboard
                const textArea = document.createElement('textarea');
                textArea.value = code;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert(`Código ${code} copiado! Envíalo por WhatsApp: +57 300 123 4567`);
            });
        }

        function searchProducts() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (searchTerm.trim()) {
                const filteredProducts = products.filter(product =>
                    product.title.toLowerCase().includes(searchTerm) ||
                    product.description.toLowerCase().includes(searchTerm) ||
                    product.code.toLowerCase().includes(searchTerm)
                );
                renderProducts(filteredProducts);
            } else {
                filterProducts(currentFilter);
            }
        }

        function openSuggestions() {
            document.getElementById('suggestionsModal').style.display = 'block';
        }

        function closeSuggestions() {
            document.getElementById('suggestionsModal').style.display = 'none';
        }

        // Cerrar modal si se hace clic fuera de él
        window.onclick = function(event) {
            const modal = document.getElementById('suggestionsModal');
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }

        // Manejar envío de sugerencias
        document.getElementById('suggestionsForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const suggestion = {
                name: formData.get('name') || 'Anónimo',
                email: formData.get('email') || 'No proporcionado',
                suggestion: formData.get('suggestion'),
                timestamp: new Date().toISOString()
            };

            // Aquí simularemos el envío a email
            console.log('Sugerencia enviada:', suggestion);
            
            // En la implementación real, aquí usarías EmailJS o similar
            alert('¡Gracias por tu sugerencia! La hemos recibido correctamente.');
            
            this.reset();
            closeSuggestions();
        });

        // Cargar productos iniciales
        document.addEventListener('DOMContentLoaded', function() {
            renderProducts(products);
        });

        // Búsqueda con Enter
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
        function openImageModal(src) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = src;
    modal.style.display = 'flex';
}

function closeImageModal() {
    document.getElementById('imageModal').style.display = 'none';
}