import React, { useEffect, useState } from "react";

export const DataSourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);

  return render(resource); // ใช้ render prop เพื่อแสดงผลข้อมูล
};
