import { useState, type FC } from 'react';
import IndexHeader from '../layouts/indexHeader';
import IndexNav from '../layouts/indexNav';
import PanelSection from '../generics/panelSection';

type Props = {};

export interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
}

const productos: Producto[] = [
    {
        id: 1,
        nombre: "Laptop Gaming",
        descripcion: "Laptop de alto rendimiento para gaming con procesador Intel i7",
        imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        precio: 1299.99
    },
    {
        id: 2,
        nombre: "Smartphone Pro",
        descripcion: "Teléfono inteligente con cámara de 108MP y pantalla OLED",
        imagen: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
        precio: 899.99
    },
    {
        id: 3,
        nombre: "Auriculares Bluetooth",
        descripcion: "Auriculares inalámbricos con cancelación de ruido activa",
        imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        precio: 249.99
    },
    {
        id: 4,
        nombre: "Tablet 10 pulgadas",
        descripcion: "Tablet con pantalla de 10 pulgadas y 128GB de almacenamiento",
        imagen: "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400",
        precio: 399.99
    },
    {
        id: 5,
        nombre: "Monitor 4K",
        descripcion: "Monitor de 27 pulgadas con resolución 4K Ultra HD",
        imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
        precio: 549.99
    }
];

const EjemploPage: FC<Props> = ({ }) => {

    const [cartElements, setCartElements] = useState<Producto[]>([])

    const addElementToCart = (producto: Producto) => {
        setCartElements(prevCart => [...prevCart, producto]);
    };

    const removeElementFromCart = (productId: number) => {
        setCartElements(prevCart => prevCart.filter(producto => producto.id !== productId));
    };

    return (

        <div className="flex flex-col p-2 w-screen h-screen bg-white">
            <IndexHeader cartInfo={cartElements} setCartInfo={setCartElements} removeElementFromCart={removeElementFromCart} />

            <div className="flex h-full flex-row">
                <IndexNav />

                <div className="flex w-full bg-gray-100 rounded-xl p-2">
                    <PanelSection>
                        <PanelSection.Header>
                            <PanelSection.Title>Carrito</PanelSection.Title>
                            <PanelSection.Description>Minim velit sit aliqua fugiat amet consectetur reprehenderit enim in. Tempor consectetur esse consequat exercitation nostrud voluptate ipsum anim ex. Consectetur nisi consequat excepteur in ipsum sunt aliquip non dolore occaecat ullamco. Consectetur ipsum esse eu fugiat proident id exercitation labore est ullamco. Laboris ut ipsum culpa sit laborum cillum minim.</PanelSection.Description>
                        </PanelSection.Header>

                        <PanelSection.Content>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {productos.map((producto) => (
                                    <div key={producto.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                        <img 
                                            src={producto.imagen} 
                                            alt={producto.nombre}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{producto.nombre}</h3>
                                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{producto.descripcion}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-2xl font-bold text-blue-600">${producto.precio}</span>
                                                <button 
                                                    onClick={() => addElementToCart(producto)}
                                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                                                >
                                                    Agregar
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PanelSection.Content>
                    </PanelSection>
                </div>
            </div>
        </div>
    );
};
export default EjemploPage;