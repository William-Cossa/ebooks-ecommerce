import Image from "next/image";
import React from "react";
import mpesaLogo from "@/public/images/payments/Mpesa-logo.png";
import visaLogo from "@/public/images/payments/visaIcon.png";
import masterCardLogo from "@/public/images/payments/masterCardIcon.png";
import emola from "@/public/images/payments/emola.png";
function PaymentsMethods() {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src={mpesaLogo}
        alt="Forma de pagamento Mpesa"
        className="h-[1.65rem] rounded-md w-auto"
      />
      <Image
        src={emola}
        alt="Forma de pagamento emola"
        className="h-[1.65rem] rounded-md w-auto"
      />
      <Image
        src={visaLogo}
        alt="Forma de pagamento visa"
        className="h-9 w-auto"
      />
      <Image
        src={masterCardLogo}
        alt="Forma de pagamento MasterCard"
        className="h-9 w-auto"
      />
    </div>
  );
}

export default PaymentsMethods;
