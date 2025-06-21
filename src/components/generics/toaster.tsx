import type { FC } from 'react';
import { Toaster } from "@/components/ui/sonner"

type Props = {};
const CustomToaster: FC<Props> = ({ }) => {
    return <div>
        <Toaster position='bottom-right' />
    </div>;
};
export default CustomToaster;