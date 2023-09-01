import { useState } from "react";
import "./App.css";
import SystemInfo from "./components/SystemInfo";
import axios from "axios";

function App() {
  const [datas, getData] = useState("");

  const getSysInfo = () => {
    const url = "http://localhost:5000/get-system-info";
    axios
      .get(url)
      .then((res) => {
        getData(res.data);
        console.log(res.data.platform);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(datas);

  return (
    <div className="App bg-slate-900">
      {datas === "" ? (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={getSysInfo}
            className="bg-transparent hover:bg-slate-700 border p-3 text-xl rounded shadow text-white"
          >
            Get system info
          </button>
        </div>
      ) : (
        ""
      )}

      {datas && datas ? <SystemInfo data={datas} /> : ""}
      {/* <NetworkSpeed /> */}
    </div>
  );
}

export default App;
