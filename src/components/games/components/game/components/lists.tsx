import React from 'react'

const Lists = (lists: any[], item: any, idx: number) => (
  <div key={idx} className="projects_link_info_container_section_items">
    {lists[item].title} <br />
    tasks : {lists[item].cards.length} <br />
  </div>
)

export default Lists
