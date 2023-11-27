import DisplayTab from "./DisplayTab"

const TwoDisplayTab = () => {
  return (
      <div>
          <DisplayTab tabEdit={['Heloo', 'Every', 'Nyan', 'From', 'React']} />
            <DisplayTab tabEdit={['Free', 'Plastine', 'Forever']} />
        </div>
  )
}

export default TwoDisplayTab