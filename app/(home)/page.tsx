import { ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Home = () => {
  return (
    <section className='py-24 lg:py-32'>
      <div className='px-6 lg:px-8'>
        <div className='mx-auto flex max-w-5xl flex-col items-center'>
          <div className='z-10 items-center text-center'>
            <h1 className='mb-8 text-4xl font-semibold text-pretty lg:text-7xl'>
              UIs for the modern web
            </h1>
            <p className='mx-auto max-w-screen-md text-muted-foreground lg:text-xl'>
              A collection of components and utilities to help you build
              beautiful and accessible web interfaces.
            </p>
            <div className='mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row'>
              <Button asChild>
                <Link href='/docs'>
                  Get started
                  <ChevronRight className='ml-2 h-4' />
                </Link>
              </Button>
              <Button variant='ghost' asChild>
                <Link href='/docs/components'>
                  Components
                  <ChevronRight className='ml-2 h-4' />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
