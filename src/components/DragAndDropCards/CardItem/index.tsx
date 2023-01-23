import { Data } from "interfaces";

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
  draggable: boolean;
}

const CardItem = ({ data, handleDragging, draggable = false }: Props) => {

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`)
    handleDragging(true)
  }
  const handleDragEnd = () => handleDragging(false)

  return (
    <div
      className='card-container'
      draggable={draggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <p>{data.content}</p>
    </div>
  )
}

export default CardItem