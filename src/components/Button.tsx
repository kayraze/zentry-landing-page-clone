interface ButtonProps {
  id?: string;
  title: string
  leftIcon?: React.ReactNode;
  containerClass: string;
}

const Button = ({ id, title, leftIcon, containerClass }: ButtonProps) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase"><div>{title}</div></span>
      {leftIcon}
    </button>
  )
}

export default Button
