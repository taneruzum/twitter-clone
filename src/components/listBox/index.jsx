
import { Listbox } from '@headlessui/react'
import classNames from 'classnames';
import React from 'react'

export default function ListBoxComponent({ title, array, selected, setSelected, className }) {
    return (
        <>
            <Listbox as='div' className={`${className} group relative   border border-[#425364]  focus:border-[color:var(--color-primary)] text-[color:var(--color-base)] text-[1.1rem] font-semibold leading-5 rounded `} value={selected} onChange={setSelected}>
                <Listbox.Button className={classNames('w-full h-full py-2 px-2 flex justify-between items-center ', {
                    // "group:border group: !border-red-500": click === true   >>>>Geri Dön
                })} >

                    <div className=' flex flex-col gap-y-0.5 text-left'>
                        <label className='text-[0.813rem] text-[#425364] font-normal'>{title}</label>
                        {selected}</div>
                    <svg className='h-[1.406rem] text-[#425364] ' viewBox="0 0 24 24"><path fill='currentColor' d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></svg>
                    {/* {(active ? (
                    <>
                      <svg viewBox="0 0 24 24"><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></svg>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24"><path d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"></path></svg>
                    </>))} */}
                </Listbox.Button>
                <Listbox.Options className={'absolute max-h-[200px] overflow-auto flex flex-col border border-white top-16 left-0 w-full  gap-y-1  pt-8 pb-4 bg-[color:var(--background-primary)] !text-[color:var(--color-base)] rounded z-20'}>
                    {array.map((item) => (
                        /* Use the `active` state to conditionally style the active option. */
                        /* Use the `selected` state to conditionally style the selected option. */
                        <Listbox.Option value={item} >
                            {({ active, selected }) => (
                                <li className={`${active ? ' bg-[#5b708366]' : ''} py-3 px-2`} >

                                    {selected}
                                    {item}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </>
    )

}
