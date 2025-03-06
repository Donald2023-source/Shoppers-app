import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  amount: number;
  className?: string;
}
const FormattedPrice = ({ amount, className }: Props) => {
    const priceFormat = new Number(amount).toLocaleString('en-NG', { style: 'currency', currency: 'NGN' });
  return <span className={twMerge('text-base font-semibold', className)}>{priceFormat}</span>;
};

export default FormattedPrice;
