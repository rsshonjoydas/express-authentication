import { navbarData } from '@/data/navbarData';
import useModal from '@/hooks/useModal';
import Modal from './Modal';
import NavbarItem from './NavbarItem';

const MobileDrawer = () => {
  const { modalOpen, close, open } = useModal();

  return (
    <>
      <div className='relative flex items-center justify-center'>
        <button type='button' onClick={open}>
          <svg
            className='flex-none w-6 h-6 stroke-slate-500'
            strokeWidth='2'
            strokeLinecap='round'
            fill='none'
          >
            <path d='M4 7h16M4 12h16M4 17h16' />
          </svg>
        </button>
      </div>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          text='drawer'
          type='drawer'
          handleClose={close}
          className='h-full bg-light dark:bg-dark'
        >
          <div className='flex flex-col items-center justify-center p-4 text-lg'>
            <h1 className='mb-8'>RS Shonjoy</h1>
            {navbarData.map((menuItem) => (
              <span key={menuItem.id} className='mb-4 link'>
                <NavbarItem label={menuItem.label} href={menuItem.path} />
              </span>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};
export default MobileDrawer;
