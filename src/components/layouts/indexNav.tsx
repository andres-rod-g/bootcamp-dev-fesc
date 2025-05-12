import { Icon, House, ChartSpline, FileChartColumn, type LucideProps } from 'lucide-react';
import type { FC } from 'react';

interface NavElement {
    url: string;
    label: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
;
}

const NAV_ELEMENTS: NavElement[] = [
    {
        url: '/',
        label: 'Inicio',
        icon: House
    },
    {
        url: '/stats',
        label: 'Estadísticas',
        icon: ChartSpline
    },
    {
        url: '/reports',
        label: 'Generar Reportes',
        icon: FileChartColumn
    }
]

const indexNav = ({ }) => {
    return (
        <div className="flex flex-col w-[400px] h-full p-2 space-y-2">
            {
                NAV_ELEMENTS.map((v) => {
                    return <a href={v.url} className=' flex flex-row px-3 py-3 space-x-2 hover:bg-gray-100 rounded-lg transition-all duration-200'>
                        <v.icon/>
                        <p>{v.label}</p>
                    </a>
                })
            }

        </div>
    )
};
export default indexNav;