import * as React from "react";
import { SVGProps } from "react";

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.1141 18.477C12.5796 18.45 13.0214 18.2627 13.3645 17.9472L23.0648 9.06358C23.4764 8.70643 23.7259 8.1983 23.7572 7.65439C23.7882 7.11077 23.5982 6.57754 23.2303 6.1759C22.8621 5.77424 22.3473 5.53792 21.8026 5.52103C21.2576 5.50384 20.729 5.70749 20.3366 6.08549L12.0004 13.7202L3.66418 6.08549C3.27173 5.70749 2.74308 5.50384 2.19838 5.52103C1.65369 5.53792 1.13857 5.77424 0.770691 6.1759C0.402765 6.57756 0.212744 7.11078 0.243757 7.65439C0.275051 8.1983 0.52456 8.70615 0.936188 9.0633L10.6365 17.9469C11.0374 18.3154 11.57 18.5066 12.1141 18.477Z" />
    </svg>
  );
};

export const XIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M20.4517 3.52641C20.115 3.18931 19.6584 3 19.1822 3C18.7061 3 18.2495 3.18931 17.9128 3.52641L12 9.44663L6.08723 3.52641C5.63122 3.08517 4.97649 2.91783 4.36509 3.08547C3.75337 3.25342 3.27574 3.73167 3.10798 4.34416C2.94054 4.95635 3.10768 5.61187 3.54836 6.06847L9.46115 11.9887L3.54836 17.9089C3.20177 18.2439 3.00428 18.7044 3.00007 19.1866C2.99586 19.6687 3.18554 20.1325 3.52582 20.4735C3.8664 20.8142 4.32959 21.0041 4.81117 20.9999C5.29273 20.9957 5.75262 20.798 6.08721 20.4509L12 14.5307L17.9128 20.4509C18.2474 20.798 18.7073 20.9957 19.1888 20.9999C19.6704 21.0041 20.1336 20.8142 20.4742 20.4735C20.8145 20.1325 21.0041 19.6687 20.9999 19.1866C20.9957 18.7044 20.7982 18.2439 20.4516 17.9089L14.5388 11.9887L20.4516 6.06847C20.7883 5.73137 20.9774 5.27416 20.9774 4.79745C20.9774 4.32074 20.7883 3.86352 20.4516 3.52643L20.4517 3.52641Z" />
    </svg>
  );
};

export const ShowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M23.8852 11.5716C22.2743 8.77505 19.7284 6.63622 16.6955 5.53143C13.6626 4.42654 10.3375 4.42654 7.3045 5.53143C4.27178 6.63617 1.72585 8.775 0.114804 11.5716C-0.0382678 11.8367 -0.0382678 12.1634 0.114804 12.4286C1.7259 15.2251 4.27163 17.3639 7.3045 18.4687C10.3374 19.5736 13.6625 19.5736 16.6955 18.4687C19.7282 17.3639 22.2741 15.2251 23.8852 12.4286C23.9604 12.2983 24 12.1504 24 12.0001C24 11.8497 23.9604 11.7018 23.8852 11.5716ZM12.0044 17.5706C9.98274 17.5654 7.99472 17.0527 6.22296 16.0794C4.45121 15.1061 2.95223 13.7033 1.86388 12.0001C3.31289 9.71084 5.49434 7.97926 8.05336 7.08725C10.6119 6.19523 13.3974 6.19523 15.9562 7.08725C18.515 7.97926 20.6965 9.71084 22.1457 12.0001C21.0574 13.7033 19.5584 15.1061 17.7866 16.0794C16.0148 17.0527 14.0268 17.5654 12.0052 17.5706H12.0044ZM12.0044 8.57206C11.095 8.57206 10.2229 8.93322 9.57995 9.57617C8.93686 10.2189 8.57561 11.0909 8.57561 12.0001C8.57561 12.9093 8.93686 13.7812 9.57995 14.4239C10.2229 15.0669 11.095 15.4281 12.0044 15.4281C12.9138 15.4281 13.786 15.0669 14.4289 14.4239C15.072 13.7812 15.4332 12.9093 15.4332 12.0001C15.4332 11.0909 15.072 10.2189 14.4289 9.57617C13.786 8.93322 12.9138 8.57206 12.0044 8.57206ZM12.0044 13.7141C11.5498 13.7141 11.1137 13.5335 10.7921 13.2121C10.4706 12.8905 10.29 12.4546 10.29 12.0001C10.29 11.5456 10.4706 11.1096 10.7921 10.788C11.1137 10.4666 11.5498 10.2861 12.0044 10.2861C12.459 10.2861 12.8951 10.4666 13.2167 10.788C13.5382 11.1096 13.7188 11.5456 13.7188 12.0001C13.7188 12.4546 13.5382 12.8906 13.2167 13.2121C12.8951 13.5335 12.459 13.7141 12.0044 13.7141Z" />
    </svg>
  );
};

export const HideIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.7428 6.45579L23.7489 1.44548C23.9373 1.22525 24.0014 0.924667 23.9192 0.646767C23.8372 0.368892 23.62 0.151502 23.3424 0.0694711C23.0647 -0.0127848 22.7644 0.0513407 22.5443 0.2399L17.111 5.6777C14.0611 4.45666 10.6741 4.37576 7.56938 5.44964C4.46474 6.52352 1.85052 8.68051 0.204919 11.526C0.0523672 11.7905 0.0523672 12.1165 0.204919 12.381C1.43202 14.4977 3.20142 16.2481 5.33065 17.4509L0.332818 22.4612C0.152046 22.6162 0.0441125 22.8397 0.0349594 23.0776C0.0256154 23.3156 0.116195 23.5467 0.284382 23.7153C0.45276 23.8836 0.683687 23.9743 0.921487 23.9651C1.15928 23.9557 1.38257 23.8477 1.5374 23.6668L6.97068 18.229C8.58333 18.8811 10.3058 19.2178 12.0452 19.2208C14.4435 19.2136 16.7981 18.5785 18.8751 17.3786C20.9523 16.1787 22.6795 14.4558 23.8856 12.381C23.9605 12.251 24 12.1035 24 11.9535C24 11.8035 23.9605 11.656 23.8856 11.526C22.654 9.40701 20.8783 7.65655 18.7428 6.45608L18.7428 6.45579ZM1.93916 11.9532C3.02381 10.2539 4.51765 8.85438 6.28344 7.88334C8.04923 6.91231 10.0305 6.40082 12.0452 6.39569C13.317 6.39646 14.5803 6.60142 15.7869 7.00279L13.7538 9.02064C13.2373 8.71013 12.6478 8.54199 12.0452 8.53321C11.1389 8.53321 10.2697 8.89353 9.62903 9.53498C8.98812 10.1762 8.62809 11.0461 8.62809 11.9532C8.63687 12.5563 8.80486 13.1462 9.11512 13.6632L6.60336 16.2282C4.69571 15.2448 3.08535 13.7689 1.93909 11.9532L1.93916 11.9532ZM13.7537 11.9532C13.7537 12.4066 13.5737 12.8416 13.2534 13.1624C12.9328 13.483 12.4982 13.6632 12.0452 13.6632C11.8976 13.6594 11.7511 13.6363 11.6094 13.5949L13.6938 11.5087V11.5085C13.7333 11.6536 13.7533 11.803 13.7537 11.9532L13.7537 11.9532ZM10.3366 11.9532C10.3366 11.4997 10.5166 11.0648 10.8369 10.744C11.1575 10.4234 11.5921 10.2432 12.0452 10.2432C12.1927 10.247 12.3392 10.2701 12.4809 10.3115L10.3965 12.3977V12.3979C10.357 12.2528 10.337 12.1034 10.3366 11.9532L10.3366 11.9532ZM12.0452 17.5107C10.7734 17.5099 9.51011 17.305 8.30346 16.9036L10.3366 14.8857C10.8531 15.1963 11.4426 15.3644 12.0452 15.3732C12.9515 15.3732 13.8207 15.0129 14.4614 14.3714C15.1023 13.7302 15.4623 12.8603 15.4623 11.9532C15.4535 11.3501 15.2855 10.7602 14.9753 10.2432L17.487 7.67817C19.3947 8.66162 21.005 10.1374 22.1513 11.9532C21.0667 13.6525 19.5728 15.052 17.807 16.023C16.0412 16.9941 14.06 17.5055 12.0452 17.5107L12.0452 17.5107Z" />
    </svg>
  );
};

export const DiscordIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M19.98 5.16936C18.0693 3.63186 15.0468 3.37123 14.9175 3.36186C14.7168 3.34498 14.5256 3.45748 14.4431 3.64311C14.4356 3.65436 14.37 3.80623 14.2968 4.04248C15.5606 4.25623 17.1131 4.68561 18.5175 5.55748C18.7425 5.69623 18.8118 5.99248 18.6731 6.21748C18.5812 6.36561 18.4256 6.44623 18.2643 6.44623C18.1781 6.44623 18.09 6.42186 18.0112 6.37311C15.5962 4.87498 12.5812 4.79998 12 4.79998C11.4187 4.79998 8.40184 4.87498 5.98871 6.37311C5.76371 6.51373 5.46746 6.44436 5.32871 6.21936C5.18809 5.99248 5.25746 5.69811 5.48246 5.55748C6.88684 4.68748 8.43934 4.25623 9.70309 4.04436C9.62996 3.80623 9.56434 3.65623 9.55871 3.64311C9.47434 3.45748 9.28496 3.34123 9.08246 3.36186C8.95309 3.37123 5.93059 3.63186 3.99371 5.18998C2.98309 6.12561 0.959961 11.5931 0.959961 16.32C0.959961 16.4044 0.982461 16.485 1.02371 16.5581C2.41871 19.0106 6.22684 19.6519 7.09496 19.68C7.09871 19.68 7.10434 19.68 7.10996 19.68C7.26371 19.68 7.40809 19.6069 7.49809 19.4831L8.37559 18.2756C6.00746 17.6644 4.79809 16.6256 4.72871 16.5637C4.52996 16.3894 4.51121 16.0856 4.68746 15.8869C4.86184 15.6881 5.16559 15.6694 5.36434 15.8437C5.39246 15.87 7.61996 17.76 12 17.76C16.3875 17.76 18.615 15.8625 18.6375 15.8437C18.8362 15.6712 19.1381 15.6881 19.3143 15.8887C19.4887 16.0875 19.47 16.3894 19.2712 16.5637C19.2018 16.6256 17.9925 17.6644 15.6243 18.2756L16.5018 19.4831C16.5918 19.6069 16.7362 19.68 16.89 19.68C16.8956 19.68 16.9012 19.68 16.905 19.68C17.7731 19.6519 21.5812 19.0106 22.9762 16.5581C23.0175 16.485 23.04 16.4044 23.04 16.32C23.04 11.5931 21.0168 6.12561 19.98 5.16936ZM8.87996 14.4C7.95184 14.4 7.19996 13.5412 7.19996 12.48C7.19996 11.4187 7.95184 10.56 8.87996 10.56C9.80809 10.56 10.56 11.4187 10.56 12.48C10.56 13.5412 9.80809 14.4 8.87996 14.4ZM15.12 14.4C14.1918 14.4 13.44 13.5412 13.44 12.48C13.44 11.4187 14.1918 10.56 15.12 10.56C16.0481 10.56 16.8 11.4187 16.8 12.48C16.8 13.5412 16.0481 14.4 15.12 14.4Z" />
    </svg>
  );
};

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2.40002C6.69842 2.40002 2.40002 6.69842 2.40002 12C2.40002 16.4984 5.49762 20.2624 9.67362 21.304C9.62882 21.1744 9.60002 21.024 9.60002 20.8376V19.1968C9.21042 19.1968 8.55762 19.1968 8.39362 19.1968C7.73682 19.1968 7.15282 18.9144 6.86962 18.3896C6.55522 17.8064 6.50082 16.9144 5.72162 16.3688C5.49042 16.1872 5.66642 15.98 5.93282 16.008C6.42482 16.1472 6.83282 16.4848 7.21682 16.9856C7.59922 17.4872 7.77922 17.6008 8.49362 17.6008C8.84002 17.6008 9.35842 17.5808 9.84642 17.504C10.1088 16.8376 10.5624 16.224 11.1168 15.9344C7.92002 15.6056 6.39442 14.0152 6.39442 11.856C6.39442 10.9264 6.79042 10.0272 7.46322 9.26962C7.24242 8.51762 6.96482 6.98402 7.54802 6.40002C8.98642 6.40002 9.85602 7.33282 10.0648 7.58482C10.7816 7.33922 11.5688 7.20002 12.396 7.20002C13.2248 7.20002 14.0152 7.33922 14.7336 7.58642C14.94 7.33602 15.8104 6.40002 17.252 6.40002C17.8376 6.98482 17.5568 8.52482 17.3336 9.27522C18.0024 10.0312 18.396 10.928 18.396 11.856C18.396 14.0136 16.8728 15.6032 13.6808 15.9336C14.5592 16.392 15.2 17.68 15.2 18.6504V20.8376C15.2 20.9208 15.1816 20.9808 15.172 21.052C18.9128 19.7408 21.6 16.1888 21.6 12C21.6 6.69842 17.3016 2.40002 12 2.40002Z" />
    </svg>
  );
};

export const GoogleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M22.25 10H12V14.25H17.9C17.35 16.95 15.05 18.5 12 18.5C8.4 18.5 5.5 15.6 5.5 12C5.5 8.4 8.4 5.5 12 5.5C13.55 5.5 14.95 6.05 16.05 6.95L19.25 3.75C17.3 2.05 14.8 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C17.5 23 22.5 19 22.5 12C22.5 11.35 22.4 10.65 22.25 10Z" />
    </svg>
  );
};

export const LoadingSpinner = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      // enable-background="new 0 0 100 100"
      {...props}
    >
      <path
        d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3
    c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="2s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7
    c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="-360 50 50"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5
    L82,35.7z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="2s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export const CartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Z"
      />
    </svg>
  );
};

export const ProfileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 13q-1.65 0-2.825-1.175T8 9V5.5q0-.625.438-1.063T9.5 4q.375 0 .713.175t.537.5q.2-.325.537-.5T12 4q.375 0 .713.175t.537.5q.2-.325.537-.5T14.5 4q.625 0 1.063.438T16 5.5V9q0 1.65-1.175 2.825T12 13Zm0-2q.825 0 1.413-.588T14 9V6.5h-4V9q0 .825.588 1.413T12 11ZM6 21q-.825 0-1.413-.588T4 19v-.8q0-.85.438-1.563T5.6 15.55q1.55-.775 3.15-1.163T12 14q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 18.2v.8q0 .825-.588 1.413T18 21H6Zm0-2h12v-.8q0-.275-.138-.5t-.362-.35q-1.35-.675-2.725-1.012T12 16q-1.4 0-2.775.338T6.5 17.35q-.225.125-.363.35T6 18.2v.8Zm6 0Zm0-12.5Z"
      />
    </svg>
  );
};

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10 3q-.425 0-.713-.288T9 2q0-.425.288-.713T10 1h4q.425 0 .713.288T15 2q0 .425-.288.713T14 3h-4Zm2 11q.425 0 .713-.288T13 13V9q0-.425-.288-.713T12 8q-.425 0-.713.288T11 9v4q0 .425.288.713T12 14Zm0 8q-1.85 0-3.488-.713T5.65 19.35q-1.225-1.225-1.938-2.863T3 13q0-1.85.713-3.488T5.65 6.65q1.225-1.225 2.863-1.938T12 4q1.55 0 2.975.5t2.675 1.45l.7-.7q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-.7.7Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35q-1.225 1.225-2.863 1.938T12 22Zm0-2q2.9 0 4.95-2.05T19 13q0-2.9-2.05-4.95T12 6Q9.1 6 7.05 8.05T5 13q0 2.9 2.05 4.95T12 20Zm0-7Z"
      />
    </svg>
  );
};

export const TrashIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
      />
    </svg>
  );
};
