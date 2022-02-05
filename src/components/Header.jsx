export const Header = () => {
  const links = [
    {
      id: 0,
      text: 'Goods',
    },
    {
      id: 1,
      text: 'F.A.Q'
    },
    {
      id: 2,
      text: 'Help'
    },
    {
      id: 3,
      text: 'Feedback'
    }
  ]

  return (
    <div className="h-[110px] bg-deep-space-odyssey px-[50px]">
      <div className="w-full max-w-[1080px] h-full flex justify-between items-center mx-auto text-white">
        <div className="w-[72px]">STELL SHOP</div>
        <div className="w-full max-w-[350px] flex justify-between">
          {
            links.map(link => {
              return (
                <div key={link.id}>{link.text}</div>
              )
            })
          }
        </div>
        <div>
          <button className="px-[32px] py-[14px] bg-gigas rounded-full mr-[10px]">Register</button>
          <button className="px-[32px] py-[14px] bg-malibu rounded-full">Login</button>
        </div>
      </div>
    </div>
  );
}