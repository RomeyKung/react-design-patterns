import axios from "axios";
import React, { useEffect, useState } from "react";

/**
 * CurrentUserLoader มีหน้าที่โหลดข้อมูลผู้ใช้ปัจจุบันจาก API และส่งข้อมูลนี้ไปยัง children
 * โดยใช้ React.cloneElement เพื่อเพิ่ม props ใหม่ให้กับ children
 * โดยที่ children สามารถเป็น React Element เดียวหรือหลายๆ Element ก็ได้
 */

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/current-user`);
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => { // ใช้ React.Children.map เพื่อวนลูปผ่าน children
        if (React.isValidElement(child)) { // ตรวจสอบว่า child เป็น React Element หรือไม่
          return React.cloneElement(child, { user }); // ส่ง props user ไปยัง child
        }
        return child; // ถ้าไม่ใช่ React Element ให้คืนค่า child เดิม
      })}
    </>
  );
};
