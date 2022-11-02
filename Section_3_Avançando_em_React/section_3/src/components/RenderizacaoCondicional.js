import { useState } from 'react';

const RenderizacaoCondicional = () => {

    const [x] = useState(false);

  return (
    <div>
        <h1>Show me it?</h1>
        {!x && <p>Se X for false, sim!</p>}
    </div>
  )
}

export default RenderizacaoCondicional