export default function Gradient ({color}) {


  return (
    <div className={`w-full absolute z-10 min-h-[10%] bg-gradient-to-b from-${color} pb-10`} />
  )
}