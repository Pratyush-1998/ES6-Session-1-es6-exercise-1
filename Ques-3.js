
// Create a markup template using string literal const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' }; Result: "<div class="song"> <p> Dying to live — Tupac (Featuring Biggie Smalls) </p> </div> “

const song = { name: 'Dying to live', artist: 'Tupac', featuring: 'Biggie Smalls' };

const markup =`
       <div class="songs">
       <p>

       ${song.name} - ${song.artist}  ${song.featuring ? `(Featuring ${song.featuring})` : ''}
       
       </p>

       </div>

`;


console.log(markup);

