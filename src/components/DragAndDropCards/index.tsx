import { useDragAndDrop } from "hooks/useDragAndDrop"
import { Status } from "interfaces"
import ContainerCards from "./ContainerCards"
import { Data } from "interfaces";
import "./DragAndDropCards.styles.scss";

const typesHero: Status[] = ['good', 'normal', 'bad']

interface Props {
  data: Array<Data>;
}

const DragAndDropCards: React.FC<Props> = ({ data }) => {
  const { isDragging, listItems, handleDragging, handleUpdateList } = useDragAndDrop(data)

  return (
    <div className="grid">
      {
        typesHero.map(container => (
          <ContainerCards
            key={container}
            items={listItems}
            status={container}
            isDragging={isDragging}
            handleDragging={handleDragging}
            handleUpdateList={handleUpdateList}
          />
        ))
      }
    </div>
  )
}

export default DragAndDropCards;