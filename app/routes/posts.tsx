import { Outlet } from "@remix-run/react";

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
