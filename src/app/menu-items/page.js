"use client";
import { useProfile } from "@/components/UseProfile";
import Link from "next/link";
import UserTabs from "@/components/layout/UserTabs";
import Right from "@/components/icons/Right";
import { useEffect, useState } from "react";
import Image from "next/image";


export default function MenuItemsPage() {
  const [menuItems, setMenuItems] = useState([])
  const { loading: profileLoading, data: profileData } = useProfile();

  useEffect(() => {
    fetch('api/menu-items')
      .then( res => {
        res.json().then(menuItems => setMenuItems(menuItems))
      })
  }, []);

  if (profileLoading) {
    return "Loading User Info...";
  }

  if (!profileData.admin) {
    return "Not an admin";
  }

  return (
    <section className="mt-8 max-w-2xl mx-auto">
      <UserTabs isAdmin={true}/>
      <div className="mt-8">
        <Link className="button" href={"/menu-items/new"}>
          Create new menu item
          <Right />
        </Link>
      </div>
      <div>
        <h2 className="text-sm mt-8 text-gray-500">Edit menu item:</h2>
        <div className="grid grid-cols-3 gap-2">
          {menuItems?.length > 0 && menuItems.map(item => (
            <Link 
              href={'/menu-items/edit/'+item._id} key={item._id} 
              className="bg-gray-200 rounded-lg p-4">
              <div className="relative">
                <Image className="rounded-md" src={item.image} alt={''} width={250} height={200} />
              </div>
              <div className="text-center">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
