import { ClassName } from '@/types';

const Border = ({ className }: ClassName) => (
  <div className={`${className} absolute flex items-end overflow-hidden left-16`}>
    <div className='flex h-[2px] w-96'>
      <div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]' />
      <div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]' />
    </div>
  </div>
);

export default Border;
