import type React from 'react';
import type { FC } from 'react';

type Props = {
    children?: React.ReactNode
};
const panelSection: FC<Props> = ({children}) => {
  return (
    <div className=' flex flex-col mx-auto space-y-2 w-[70%] pt-10'>
        {children}
    </div>
  );
};

const Header: FC<Props> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}
 
const Title: FC<Props> = ({ children }) => {
    return (
        <h1 className=' font-semibold text-3xl'>
            {children}
        </h1>
    )
}

const Description: FC<Props> = ({ children }) => {
    return (
        <p className=' text-gray-500'>
            {children}
        </p>
    )
}

export default Object.assign(
    panelSection,
    {
        Title,
        Description,
        Header
    }
)