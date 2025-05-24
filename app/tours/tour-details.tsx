import React from 'react'

/**
 * A functional component that returns a simple div element with the text "tour-details".
 * @param {{ id: string }} props - The component props.
 * @returns {JSX.Element} A JSX element representing the component.
 */

function TourDetails({ id }: { id: string }) {
  return (
    <div>Tour {id}</div>
  )
}

export default TourDetails
