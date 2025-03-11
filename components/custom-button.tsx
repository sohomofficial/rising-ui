import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

function CustomButton({
  children,
  className,
  isLoading,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  props: React.ComponentProps<typeof Button>;
}) {
  return (
    <Button className={cn('', className)} {...props} disabled={isLoading}>
      {isLoading && <Loader2 className='h-4 w-4 mr-2 animate-spin' />}
      {children}
    </Button>
  );
}

export default CustomButton;
