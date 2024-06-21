import React from 'react' 


const oleksaBanner = 
"  ____  _      _\n" +
" / __ \\| |    | |\n" +
"| |  | | | ___| | _____  __ _\n" + 
"| |  | | |/ _ \\ |/ / __|/ _` |\n" +
"| |__| | |  __/   <\\__ \\ (_| |\n" +
" \\____/|_|\\___|_|\\_\\___/\\__,_|\n" +
"\n"

const homenkoBanner = 
" _    _                            _\n" +
"| |  | |                          | |\n" +
"| |__| | ___  _ __ ___   ___ _ __ | | _____\n" + 
"|  __  |/ _ \\| '_ ` _ \\ / _ \\ '_ \\| |/ / _ \\\n" +
"| |  | | (_) | | | | | |  __/ | | |   < (_) |\n" +
"|_|  |_|\\___/|_| |_| |_|\\___|_| |_|_|\\_\\___/\n" +
"\n"

const hiThere = "Hi, ..."

function App() {
  return (
    <div className="app bg-base-400">
      <div className="flex flex-wrap">
        <pre className="overflow-auto">{oleksaBanner}</pre>
        <pre className="overflow-auto">{homenkoBanner}</pre>
      </div>
      <div className="ml-1">{hiThere}</div>
    </div>
  )
}

export default App
