import { Button } from './../ui/button';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className='py-14 bg-white dark:bg-background'>
        <div className="container mx-auto">
            <div className='flex flex-col items-center'>
                <h2 className='h2 max-w-xl text-center mb-8'>
                    I am looking for Jobs.
                </h2>
                <Link href='/contact'>
                    <Button>Contact me</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default CTA