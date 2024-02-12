import logo from '../../../assets/img/common/logo.svg';
import { Button } from '../../../widgets/Button';

export function Banner() {
    return (
        <section className="banner-bg">
            <div className="container">
                <div className='min-h-[92vh] flex flex-col items-center justify-center gap-[28px]'>
                    <img className='aspect-[4/1] w-[687px]' src={logo} alt="Logo" />
                    <h2 className='uppercase text-[32px]'>Бренд одежды</h2>
                    <Button>Перейти в каталог</Button>
                </div>
            </div>
        </section>
    );
}