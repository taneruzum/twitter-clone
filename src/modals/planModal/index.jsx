import { Fragment, useState } from 'react'
import PropTypes from "prop-types";
import Button from "~/components/button";
import ListBoxComponent from '~/components/listBox';


const aylar = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

const Days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const Hours = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23'
];
const Minutes = [
  '00', '01', '02', '03', '04', '05', '06', '07', '08', '09',
  '10', '11', '12', '13', '14', '15', '16', '17', '18', '19',
  '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
  '30', '31', '32', '33', '34', '35', '36', '37', '38', '39',
  '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
  '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'
];

const date = new Date()
const Years = [
  date.getFullYear(),
  date.getFullYear() + 1,
  date.getFullYear() + 2,
]

//* Bulunduğumuz konuma göre GMT belirleme
const timeZoneOffset = new Date().getTimezoneOffset();
const offsetHours = Math.abs(timeZoneOffset / 60);
const offsetMinutes = Math.abs(timeZoneOffset % 60);
const offsetSign = timeZoneOffset > 0 ? '-' : '+';
const timeZoneString = `GMT${offsetSign}${String(offsetHours).padStart(2, '0')}:${String(offsetMinutes).padStart(2, '0')}`;




export default function PlanModal({ close }) {

  const date = (new Date());
  const [selectedMonth, setSelectedMonth] = useState(aylar[0])
  const [selectedDays, setSelectedDays] = useState(Days[date.toLocaleDateString('tr-TR', { day: '2-digit' })])
  const [selectedYear, setSelectedYear] = useState(Years[0])
  const [selectedHour, setSelectedHour] = useState(date.getHours())
  const [selectedMinute, setSelectedMinute] = useState(date.getMinutes())


  return (
    <>
      <div className="w-full ">
        <div className="flex justify-between items-center gap-5 py-2 px-3">
          <div className="hover:bg-[color:var(--background-secondary)] rounded-full flex items-center justify-center p-2">
            <button onClick={close} className="w-[1.25rem] h-[1.25rem]">
              <svg viewBox="0 0 24 24">
                <g>
                  <path
                    fill="currentColor"
                    d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="flex-1 font-bold text-xl text-[color:var(--color-base)]">
            <span>Planla</span>
          </div>
          <Button size={"small"} variant={"white"}>Onayla</Button>
        </div>

        <div className="flex flex-col gap-y-5 items-center text-[color:var(--color-base-secondary)] py-3 px-4 ">
          <div className="w-full flex gap-2 items-center">
            <svg height={"0.977rem"} viewBox="0 0 24 24" ><path fill="currentColor" d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path></svg>
            <span> {date.toLocaleDateString('tr-TR', { day: '2-digit', month: 'short', year: "numeric", weekday: 'long', })} ,  {date.getHours() > 12 ? ('ÖS') : ('ÖÖ')} {date.getHours()}:{date.getMinutes() < 10 ? ('0') : ('')}{date.getMinutes()} itibarıyla gönderilecek </span>
          </div>

          <div className="w-full flex flex-col ">
            <span>Tarih</span>
            <div className='flex gap-x-3 items-center '>
              <ListBoxComponent className={'min-w-[230px]'} title={'Ay'} array={aylar} selected={selectedMonth} setSelected={setSelectedMonth} />
              <ListBoxComponent className={'min-w-[112px]'} title={'Gün'} array={Days} selected={selectedDays} setSelected={setSelectedDays} />
              <ListBoxComponent className={'min-w-[132px]'} title={'Yıl'} array={Years} selected={selectedYear} setSelected={setSelectedYear} />
              <div className='p-3 hover:bg-[color:var(--background-secondary)] rounded-full flex items-center justify-center cursor-pointer'>
                <svg className='text-[#eff3f4]' width={24} height={24} viewBox="0 0 24 24"><path fill='currentColor' d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></svg>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col ">
            <span>Saat</span>
            <div className='flex gap-x-3 items-center '>
              <ListBoxComponent className={'min-w-[180px]'} title={'Saat'} array={Hours} selected={selectedHour} setSelected={setSelectedHour} />
              <ListBoxComponent className={'min-w-[180px]'} title={'Dakika'} array={Minutes} selected={selectedMinute} setSelected={setSelectedMinute} />
            </div>
          </div>

          <div className="w-full flex flex-col mb-5">
            <span>Saat dilimi</span>
            <span className='text-[color:var(--color-base)] text-[20px] '> {timeZoneString} </span>
          </div>
        </div>
        <div className='border-[#2f3336] border-t-[1px] py-3 px-7 font-bold text-[color:var(--color-primary)] text-left text-[14px]'>Planlanan Gönderiler</div>
      </div >



    </>
  )
}
PlanModal.propTypes = {
  close: PropTypes.any,

}




