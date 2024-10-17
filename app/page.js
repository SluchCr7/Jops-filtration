'use client'
import Link from "next/link";
import { MdOutlineClear } from "react-icons/md";
import { useEffect, useState } from "react";
import data from '../data.json';
import Image from "next/image";
export default function Home() {
  const [selected, setSelected] = useState([]);
  const [dataFilter, setDataFilter] = useState(data)
  useEffect(() => {
    if(selected.length > 0){
      setDataFilter(data.filter((item) => {
        return selected.every((i) => item.languages.includes(i) || item.tools.includes(i))
      }))
    } else {
      setDataFilter(data)
    }
  } , [selected])
  return (
    <div className="flex items-center w-full flex-col">
      <div className="bg-[url('../public/images/bg-header-desktop.svg')] bg-primary_desaturated bg-no-repeat bg-center w-full relative h-[150px]">
        <div className={`w-[60%] p-6 m-auto absolute ${selected.length > 0 ? "flex" : "hidden"} items-center justify-between -bottom-4 left-1/2 transform -translate-x-1/2 shadow-lg bg-white`}>
          <div className="flex items-center gap-3">
            {
              selected.map((item , index) => {
                return(
                  <div key={index} className="flex items-center gap-1 bg-primary text-primary_desaturated">
                    <span onChange={(e) => changeItems(e)} className="text-sm font-bold px-2 py-1">{item}</span>
                    <button onClick={() => setSelected(selected.filter((i) => i !== item))} className="text-sm font-bold bg-primary_desaturated p-1 text-primary hover:bg-black duration-500 transition-all"><MdOutlineClear /></button>
                  </div>
                )
              })  
            }
          </div>
          <button onClick={()=> setSelected([])} className="text-sm font-bold text-primary_desaturated">Clear</button>
        </div>
      </div>
        <div className="flex items-start w-full pl-[20%] my-4 flex-col gap-9 xl:gap-6 pt-10">
          {
            dataFilter.map((item) => {
              return (
                <div key={item.id} className="w-[75%]">
                  <div className="flex items-start  xl:items-center flex-col xl:flex-row justify-between bg-primary p-4 border-l-[5px] border-primary_desaturated gap-6">
                    <div className="flex flex-col xl:flex-row items-center gap-6 relative">
                      <Image src={item.logo} alt={item.company} width={50} height={50} className="w-[45px] h-[45px] absolute top-[-2.5rem] left-2 xl:w-[70px] xl:h-[70px] xl:static" />
                      <div className="flex items-start flex-col gap-1 my-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-primary_desaturated font-bold">{item.company}</span>
                          <div>
                            {item.new
                              ?
                              <span className="bg-primary_desaturated text-primary rounded-full w-[70px] h-[70px] text-xs py-1 px-2">
                                new!
                              </span>
                              : ""
                            }
                            {item.featured
                              ?
                              <span className="bg-black ml-2 text-primary rounded-full w-[70px] h-[70px] text-xs py-1 px-2">
                                featured
                              </span>
                              : ""
                            }
                          </div>
                        </div>
                        <span className="text-lg text-primary_desaturated font-bold">{item.position}</span>
                        <div className="flex items-center gap-2 text-third_Dark">
                          <span className="text-sm">{item.postedAt}</span>
                          <span className="text-sm text-primary_desaturated">•</span>
                          <span className="text-sm">{item.contract}</span>
                          <span className="text-sm text-primary_desaturated">•</span>
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {
                        item.tools?.map((tool) => {
                          return (
                            <span onClick={() => {
                              if(selected.includes(tool)){
                                setSelected(selected.filter((i) => i !== tool))
                              } else {
                                setSelected([...selected, tool])
                              }
                            }} key={tool} className="text-sm text-primary_desaturated font-bold px-2 py-1 ml-1 bg-secondary_filter hover:bg-primary_desaturated hover:text-secondary_filter duration-500 transition-all">{tool}</span>
                          )
                        })
                      }
                      {
                        item.languages?.map((language) => {
                          return (
                            <span onClick={() => {
                              if(selected.includes(language)){
                                setSelected(selected.filter((i) => i !== language))
                              } else {
                                setSelected([...selected, language])
                              }
                            }} key={language} className="text-sm text-primary_desaturated font-bold px-2 py-1 ml-1 bg-secondary_filter hover:bg-primary_desaturated hover:text-secondary_filter duration-500 transition-all">{language}</span>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>
  );
}
