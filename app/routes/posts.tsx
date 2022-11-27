// import styles from "highlight.js/styles/night-owl.css";
import { Outlet } from "@remix-run/react";

// export const links = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: styles,
//     },
//   ];
// };

export default function Posts() {
  return (
    <div>
      <div className='flex justify-center'>
        <div className='prose lg:prose-xl py-10'>
          <Outlet />
        </div>

      </div>
    </div>
  );
}
