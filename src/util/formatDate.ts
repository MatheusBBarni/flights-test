import { format, parseISO } from 'date-fns';

const formatDate = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy HH:mm')
};

export default formatDate;
