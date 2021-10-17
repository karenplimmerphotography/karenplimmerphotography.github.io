
function createDog(petName, title, pedigreeName, linkName, colour, dateYear, dateMonth, dateDate, sex, tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, summary, image) {
    return {
      petName,
      title,
      pedigreeName,
      linkName,
      colour,
      dateYear,
      dateMonth,
      dateDate,
      sex,
      tags,
      breeder,
      owner,
      sire,
      dam,
      awards,
      bestInShow,
      specialMention,
      progeny,
      siblings,
      pedigree,
      summary,
      image
    }
  }
  
  bis = 'best in show';
  breeding = 'breeding </a>';
  champion = 'champion </a>';
  grandChampion = 'grand champion </a>';
  pastChampion = 'past champion';
  pet = 'pet';
  showing = 'in the show ring';
  vintage = 'vintage';
  vip = 'vip';
  pat = 'Pat Plimmer';
  patSue = 'Pat Plimmer & Sue Seddon';
  suePat = 'Sue Seddon & Pat Plimmer';
  
  
  let alaska, benji, boris, bree, coco, codie, cosmo, cruz, dash, demi, eden, flame, frosty, havoc, jade, jaffa, jazz, kona, kruger, luca, memphis, mint, misty, piper, raven, shiraz, shylo, texas, tia, tussock, tyler;
  let alaskaLinkName = '<a href="https://www.foxterrier.co.nz/alaska">Tamsam Simply Alaska <em>(Alaska)</em></a>';
  let benjiLinkName = '<a href="https://www.foxterrier.co.nz/benji">Tamsam All Eyze On Me <em>(Benji)</em></a>';
  let borisLinkName = '<a href="https://www.foxterrier.co.nz/boris">Tamsam Touched By The Devil <em>(Boris)</em></a>';
  let breeLinkName = '<a href="https://www.tamsam.foxterrier.co.nz/bree">Ch Tamatea Claim To Fame <em>(Bree)</em></a>';
  let cocoLinkName = '<a href="https://www.foxterrier.co.nz/coco">Tamsam CocoChanel <em>(Coco)</em></a>';
  let codieLinkName = '<a href="https://www.foxterrier.co.nz/codie">Grand Ch Tamatea Tailormade <em>(Codie)</em></a>';
  cosmoLinkName = '<a href="https://www.foxterrier.co.nz/cosmo">Ch Tamatea Free Spirit <em>(Cosmo)</em></a>';
  cruzLinkName = '<a href="https://www.foxterrier.co.nz/cruz">Ch Tamsam Trooping The Colour <em>(Cruz)</em></a>';
  dashLinkName = '<a href="https://www.foxterrier.co.nz/dash">Tamsam Dash Of Distinction <em>(Dash)</em></a>';
  demiLinkName = '<a href="https://www.foxterrier.co.nz/demi">Ch Tamsam Give Me More <em>(Demi)</em></a>';
  edenLinkName = '<a href="https://www.foxterrier.co.nz/eden">Ch Tamsam Pin Up Girl <em>(Eden)</em></a>';
  flameLinkName = '<a href="https://www.foxterrier.co.nz/">Ch Tamatea Forbidden Flame <em>(Flame) </em></a>';
  frostyLinkName = '<a href="https://www.tamsam.foxterrier.co.nz/frosty">Ch Tamsam Frosted Ice <em>(Frosty)</em></a>';
  havocLinkName = '<a href="https://www.foxterrier.co.nz/havoc">Ch Tamsam Cry Havoc <em>(Havoc)</em></a>';
  jadeLinkName = '<a href="https://www.foxterrier.co.nz/jade">Ch Tamatea Wild as The Wind <em>(Jade)</em></a>';
  jaffaLinkName = '<a href="https://www.foxterrier.co.nz/jade">Ch Tamatea Wild as The Wind <em>(Jade)</em></a>';
  jazzLinkName = '<a href="https://www.foxterrier.co.nz/jazz">ChTamatea Jazz-Ma-Tazz <em>(Jazz)</em></a>';
  konaLinkName = '<a href="https://www.foxterrier.co.nz/kona">Ch Tamsam Master Of Puzzles <em>(Kona)</em></a>';
  krugerLinkName = '<a href="https://www.foxterrier.co.nz/kruger">Tamatea Classic Kruger <em>(Kruger)</em></a>';
  lucaLinkName = '';
  memphisLinkName = '<a href="https://www.foxterrier.co.nz/memphis">Aust Grand Ch NZ Ch Tamsam Jamie\'s Choice <em>(Memphis)</em></a>';
  mintLinkName = '<a href="https://www.foxterrier.co.nz/mint">Ch Tamsam All Right I\'m White <em>(Mint)</em></a>';
  mistyLinkName = '';
  piperLinkName = '<a href="https://www.foxterrier.co.nz/piper">Ch Tamsam Flashpoint <em>(Piper)</em></a>';
  ravenLinkName = '<a href="https://www.foxterrier.co.nz/raven">Tamsam Painted Black <em>(Raven)</em></a>';
  shirazLinkName = '<a href="https://www.foxterrier.co.nz/shiraz">Ch Tamsam Iced Shiraz <em>(Shiraz) </em></a>';
  shyloLinkName = '<a href="https://www.foxterrier.co.nz/shylo">Ch Tamsam Flirt Alert <em>(Shylo)</em></a>';
  texasLinkName = '';
  tiaLinkName = '<a href="https://www.foxterrier.co.nz/tia">Ch Tamsam Every Inch A Lady <em>(Tia) </em></a>';
  tussockLinkName = '<a href="https://www.foxterrier.co.nz/tussock">Ch Tamsam Limited Edition <em>(Tussock)</em></a>';
  tylerLinkName = '<a href="https://www.foxterrier.co.nz/tyler">Ch Tamsam An Addictive Habit <em>(Tyler)</em></a>';
  
  //'<a href="https://www.foxterrier.co.nz/"><em>()</em></a>',
  alaska = createDog('Alaska', 'Ch ', 'Tamsam Simply Alaska', '<a href="https://www.foxterrier.co.nz/alaska">Tamsam Simply Alaska <em>(Alaska)</em></a>', 'Tan & White', 2006, 'February', 13, 'Female', [pastChampion, pet, vintage], patSue, patSue, 'Jolly Well Solid Bronze (Imp USA) <em>(Stryder)</em>', breeLinkName, null, false, null, [frosty, shiraz], null, ['Jolly Well Solid Bronze (Imp USA) <em>(Stryder)</em>', bree, 'Tunnel Hill Street Wise', 'Tamatea Moulded In Bronze', havoc, flame], '', ''); //alaska
  benji = createDog('Benji', 'Ch ', 'Tamsam All Eyze On Me', '<a href="https://www.foxterrier.co.nz/benji">Tamsam All Eyze On Me <em>(Benji)</em></a>', 'Tan & White', 2018, "January", 22, 'Male', [breeding, champion, showing], suePat, suePat, tylerLinkName, 'Ch Tamsam Special Edition <em>(Pixie)</em>', ['Best Of Group', 'Reserve Best In Show'], false, null, null, null, [tyler, 'Ch Tamsam Special Edition <em>(Pixie)</em>', tussock, 'Ch Tamsam  Pin Up Girl', tussock, demi], '', ''); //benji
  boris = createDog('Boris', '', 'Tamsam Touched By The Devil', '<a href="https://www.foxterrier.co.nz/boris">Tamsam Touched By The Devil <em>(Boris)</em></a>', 'Tan & White', 2006, 'July', 1, 'Male', [pet], pat, pat, codieLinkName, 'Tamsam The Drama Queen', null, null, null, null, null, [codie, 'Tamsam The Drama Queen', cosmo, jade, cosmo, piper], '', ''); //boris
  bree = createDog('Bree', 'Ch ', 'Tamatea Claim To Fame', '<a href="https://www.tamsam.foxterrier.co.nz/bree">Ch Tamatea Claim To Fame <em>(Bree)</em></a>', 'Tan & White', 2002, 'November', 27, 'Female', [pastChampion], pat, pat, havocLinkName, flameLinkName, null, false, null, [alaska, 'Ch Tamsam Something Special <em>(Amber)</em>'], null, [havoc, flame, cosmo, 'Ch Tamatea Etched In Bronze', 'Ch Rama Returning Romantic (Imp Aust)', 'Ch Tamatea Every Inch A Lady'], '', ''); //bree
  coco = createDog('Coco', '', 'Tamsam Coco Chanel', '<a href="https://www.foxterrier.co.nz/coco">Tamsam CocoChanel <em>(Coco)</em></a>', 'Tan & White', 2020, 'September', 9, 'Female', [breeding, showing], patSue, patSue, cruzLinkName, jaffaLinkName, ['BabyPuppy In Show', 'Puppy In Show'], false, null, null, [dash], [cruz, jaffa, memphis, shylo, tyler, mint], '', ''); //coco /
  codie = createDog('Codie', 'NZ Grand Ch ', 'Tamatea Tailormade', '<a href="https://www.foxterrier.co.nz/codie">Grand Ch Tamatea Tailormade <em>(Codie)</em></a>', 'Tan & White', 1996, 'October', 9, 'Male', [vip, grandChampion, bis], pat, 'Karen & Pat Plimmer', cosmoLinkName, jadeLinkName, ['3 Best In Show All Breeds', '3 Reserve Best In Show All Breeds', '3 Best In Show Terrier Specialities', '1 Best In Show Fox Terrier Club', '28 In Show Awards', '45 Best Of Group Awards', 'Winner Of Supreme Show Dog Contest 1999'], true, null, piper, null, [cosmo, jade], '', ''); //codie
  cosmo = createDog("Cosmo", 'Ch ', 'Tamatea Free Spirit', '<a href="https://www.foxterrier.co.nz/cosmo">Ch Tamatea Free Spirit <em>(Cosmo)</em></a>', 'Tan & White', 1994, 'December', 4, 'Male', [vip, bis], pat, pat, 'Ch Secret Weapon Of Scanden', flameLinkName, ['Best In Show'], true, null, [codie, memphis, havoc, texas], null, ['Ch Secret Weapon Of Scanden', flame, 'NZ Aust Ch Grenpark Starling (Imp Aust) <em>(Adrian)</em>', 'Ch Solar Bronze Of Scanden', 'NZ Ch Rama Returning Romantic (Imp Aust)', 'Ch Tamatea Every Inch A Lady'], '', ''); //cosmo
  cruz = createDog('Cruz', 'Ch ', 'Tamsam Trooping The Colour', '<a href="https://www.foxterrier.co.nz/cruz">Ch Tamsam Trooping The Colour <em>(Cruz)</em></a>', 'Black & White', 2010, 'December', 20, 'Male', [bis, vip], suePat, suePat, memphisLinkName, shyloLinkName, ['2 Best In Show All Breeds', '2 Reserve Best In Show All Breeds'], true, null, [misty, demi, dash, coco], null, [memphis, shylo, cosmo, piper, havoc, 'Ch Rama Ranking Delight (Imp Aust)'], '', ''); //cruz
  dash = createDog('Dash', '', 'Tamsam Dash Of Distinction', '<a href="https://www.foxterrier.co.nz/dash">Tamsam Dash Of Distinction <em>(Dash)</em></a>', 'Black & White', 2000, 'July', 9, 'Male', [breeding, showing], patSue, patSue, cruzLinkName, jaffaLinkName, ['BabyPuppy In Show', 'Puppy In Show'], false, null, null, [coco], [cruz, jaffa, memphis, shylo, tyler, mint], '', '');//dash
  demi = createDog('Demi', 'Ch ', 'Tamsam Give Me More', '<a href="https://www.foxterrier.co.nz/demi">Ch Tamsam Give Me More <em>(Demi)</em></a>', 'Tan & White', 2013, 'May', 5, 'Female', [bis, champion], suePat, suePat, cruzLinkName, 'Ch Tamsam Ideal Gift <em>(Sienna) </em>', ['Best In Show Fox Terrier Speciality'], true, null, [tia, 'Ch Tamsam Special Edition <em>(Pixie)</em>'], null, [cruz, 'Ch Tamsam Ideal Gift <em>(Sienna) </em>', memphis, shylo,'Grand Ch Tamsam Battle Cry', shylo], '', '');//demi
  eden = createDog('Eden', 'Ch ', 'Tamsam Pin Up Girl', '<a href="https://www.foxterrier.co.nz/eden">Ch Tamsam Pin Up Girl <em>(Eden)</em></a>', 'Tan & White', 2010, 'Decemeber', 20, 'Female', [champion], suePat, suePat, memphisLinkName, shyloLinkName, null, false, null, [tyler, 'Ch Tamsam Happy To Keepa <em>(Kenya)' ], [cruz], [cruz, shylo, cosmo, piper, havoc, 'Ch Rama Ranking Delight (Imp Aust)'], '', '');//eden
  flame = createDog('Flame', 'Ch ', 'Tamatea Forbidden Flame', '<a href="https://www.foxterrier.co.nz/">Ch Tamatea Forbidden Flame <em>(Flame) </em></a>', 'Tan & White', 1992, 'August', 11, 'Female', [vip], pat, pat, 'Ch Rama Returning Romantic (Imp Aust)', 'Ch Tamatea Every Inch A Lady', null, false, null, [cosmo, bree], null, ['Ch Rama Returning Romantic (Imp Aust', 'Ch Tamatea Every Inch A Lady', 'Aust Ch Ecirp Topline', 'Rama End Of Rainbowe', 'Aust NZ Ch Grenpark Reliance (Imp Aust)', 'Rama Easter Parade (Imp Aust)'], '', '');//flame
  frosty = createDog('Frosty', 'Ch ', 'Tamsam Frosted Ice', '<a href="https://www.tamsam.foxterrier.co.nz/frosty">Ch Tamsam Frosted Ice <em>(Frosty)</em></a>', 'Tan & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//frosty
  havoc = createDog('Havoc', 'Ch ', 'Tamsam Cry Havoc', '<a href="https://www.foxterrier.co.nz/havoc">Ch Tamsam Cry Havoc <em>(Havoc)</em></a>', 'Tan & White', new Date(), 'Male', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//havoc
  /*jade = createDog('Jade', 'Ch ', 'Tamatea Wild as The Wind', '<a href="https://www.foxterrier.co.nz/jade">Ch Tamatea Wild as The Wind <em>(Jade)</em></a>', 'Tan & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//jade
  jaffa = createDog('Jaffa', 'Ch ', 'Tamsam Glamour Puss', '<a href="https://www.foxterrier.co.nz/jade">Ch Tamatea Wild as The Wind <em>(Jade)</em></a>', 'Tan & White', new Date(), 'Female', [champion], breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//jaffa
  jazz = createDog('Jazz', 'Ch ', 'Tamatea Jazz-Ma-Tazz', '<a href="https://www.foxterrier.co.nz/jazz">ChTamatea Jazz-Ma-Tazz <em>(Jazz)</em></a>', 'Black & White', new Date('1992-5-26'), 'Male', [vintage, past-champion], pat, pat, 'NZ Aust Ch All Talk Of Trehunsey (Tonto)', 'NZ Ch Grenpark Our Pick (Nyssa)', null, false, 'Brother and arch enemy of Kruger', null, 'Tamatea Classic Kruger', ['NZ Aust Ch All Talk Of Trehunsey (Tonto)', 'NZ Ch Grenpark Our Pick (Nyssa)', 'Ch Tamatea Desert Gold', 'Ch Tamatea The Enchantress', 'Aust Ch Grenpark Wiseman', 'Aust Ch Grenpark Fairpick'], '', '');//jazz
  kona = createDog('Kona', 'Ch ', 'Tamsam Master Of Puzzles', '<a href="https://www.foxterrier.co.nz/kona">Ch Tamsam Master Of Puzzles <em>(Kona)</em></a>', 'Black & White', new Date(), 'Male', [champion], breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//kona
  kruger = createDog('Kruger', '', 'Tamatea Classic Kruger', '<a href="https://www.foxterrier.co.nz/kruger">Tamatea Classic Kruger <em>(Kruger)</em></a>', 'Tan & White', new Date("1992-05-26"), 'Male', [pet], pat, 'Karen & Pat Plimmer', 'NZ Aust Ch All Talk Of Trehunsey (Tonto)', 'NZ Ch Grenpark Our Pick (Nyssa)', null, false, 'Brother and arch enemy of Jazz', null, 'Ch Tamatea Jazz-Ma-Tazz', ['NZ Aust Ch All Talk Of Trehunsey (Tonto)', 'NZ Ch Grenpark Our Pick (Nyssa)', 'Ch Tamatea Desert Gold', 'Ch Tamatea The Enchantress', 'Aust Ch Grenpark Wiseman', 'Aust Ch Grenpark Fairpick'], '', '');//kruger
  luca = createDog("Luca", 'title', pedigreeName, linkName, 'Black & White', new Date(), 'Male', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//luca
  memphis = createDog('Memphis', 'Aust Grand Ch NZ Ch ', 'Tamsam Jamie\'s Choice', '<a href="https://www.foxterrier.co.nz/memphis">Aust Grand Ch NZ Ch Tamsam Jamie\'s Choice <em>(Memphis)</em></a>', 'Tan & White', new Date(), sex, tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//memphis
  mint = createDog('Mint', 'Ch ', 'Tamsam All Right I\'m White', '<a href="https://www.foxterrier.co.nz/mint">Ch Tamsam All Right I\'m White <em>(Mint)</em></a>', 'Black & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//mint
  misty = createDog('Misty', 'Ch', pedigreeName, linkName, 'Black & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//misty
  piper = createDog('Piper', 'Ch', 'Tamsam Flashpoint', '<a href="https://www.foxterrier.co.nz/piper">Ch Tamsam Flashpoint <em>(Piper)</em></a>', 'Tan & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//piper
  raven = createDog('Raven', '', 'Tamatea Painted Black', '<a href="https://www.foxterrier.co.nz/raven">Tamsam Painted Black <em>(Raven)</em></a>', 'Black & White', new Date(2020 - 12 - 12), 'Female', [showing], patSue, patSue, 'Am Ch Belfox Ink (Blg)', tia.linkName, awards, false, null, null, null, ['Am Ch Belfox Ink (Blg)', tia.linkName, 'Ch Belfox Emperor', 'Sufredon Grace', kona.linkName, demi.linkName], '', '');//raven
  shiraz = createDog('Shiraz', 'Ch ', 'Tamsam Iced Shiraz', '<a href="https://www.foxterrier.co.nz/shiraz">Ch Tamsam Iced Shiraz <em>(Shiraz) </em></a>', 'Tan & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//shiraz
  shylo = createDog('Shylo', 'Ch', 'Tamsam Flirt Alert', '<a href="https://www.foxterrier.co.nz/shylo">Ch Tamsam Flirt Alert <em>(Shylo)</em></a>', 'Tan & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//shylo
  texas = createDog('Texas', 'title', pedigreeName, linkName, 'Tan & White', new Date(), 'Male', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//texas
  tia = createDog('Tia', 'Ch ', pedigreeName, '<a href="https://www.foxterrier.co.nz/tia">Ch Tamsam Every Inch A Lady <em>(Tia) </em></a>', 'Black & White', new Date(), 'Female', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//tia
  tussock = createDog('Tussock', 'Ch', 'Tamsam Limited Edition', '<a href="https://www.foxterrier.co.nz/tussock">Ch Tamsam Limited Edition <em>(Tussock)</em></a>', 'Tan & White', new Date(), 'Male', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//tussock
  tyler = createDog('Tyler', 'Ch ', 'Tamsam An Addictive Habit', '<a href="https://www.foxterrier.co.nz/tyler">Ch Tamsam An Addictive Habit <em>(Tyler)</em></a>', 'Tan & White', new Date(), 'Male', tags, breeder, owner, sire, dam, awards, bestInShow, specialMention, progeny, siblings, pedigree, '', '');//tyler
  */
  const tamsam = {
    dogs: [alaska, benji, boris, bree, coco, codie, cosmo, cruz, dash, demi, eden, flame, frosty, havoc,/*jade, jaffa, jazz, kona, kruger, luca, memphis, mint, misty, piper, raven, shiraz, shylo, texas, tia, tussock, tyler*/ ],
  
    showResults: [],
  
    addDog(name) {
      this.dogs.push(name)
    },
  
    addShowResults(nameOfShow, location, date, winningDog, awards) {
      const result = {
        nameOfShow,
        location,
        date,
        winningDog,
        awards
      };
      return this.showResults.push(result);
    },
  
    sortDogsByPetName() {
      this.dogs.sort((a, b) => {
        if (a.petName < b.petName)
          return -1;
        if (a.petName > b.petName)
          return 1;
        return 0;
      });
    },
  
    sortDogsByPedigreeName() {
      this.dogs.sort((a, b) => {
        if (a.pedigreeName < b.pedigreeName)
          return -1;
        if (a.pedigreeName > b.pedigreeName)
          return 1;
        return 0;
      });
    },
  
  
    sortDogsByDOB() {
      this.dogs.sort((a, b) => {
        if (a.dob < b.dob)
          return -1;
        if (a.dob > b.dob)
          return 1;
        return 0;
      });
    },
  
  } //end Tamsam Object
  
  
  
  alaska.image = '<a href="https://www.foxterrier.co.nz/alaska"><img loading="lazy" width="1600" height="1200" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Alaska-tan-and-white-smooth-fox-terrier-baby-puppy-walking-up-lavender-path.jpg" alt="Baby Alaska walking up lavender path" class="wp-image-121 single-dog-photo-image" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Alaska-tan-and-white-smooth-fox-terrier-baby-puppy-walking-up-lavender-path.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Alaska-tan-and-white-smooth-fox-terrier-baby-puppy-walking-up-lavender-path-1200x900.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Alaska-tan-and-white-smooth-fox-terrier-baby-puppy-walking-up-lavender-path-768x576.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Alaska-tan-and-white-smooth-fox-terrier-baby-puppy-walking-up-lavender-path-768x576@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>';
  benji.image = '<a href="https://www.foxterrier.co.nz/benji"><img loading="lazy" width="456" height="280" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Benji-Tan-and-white-smooth-fox-terrier-show-dog.jpg" alt="Benji- tan and white smooth fox terrier with many trophies" class="single-dog-photo-image wp-image-932"></a>';
  boris.image = '<a href="https://www.foxterrier.co.nz/boris"><img loading="lazy" width="1600" height="1600" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-1600x1600.jpg" alt="Boris - tan and white smooth fox terrier portrait" class="wp-image-191 single-dog-photo-image" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-1600x1600.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-1200x1200.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-150x150.jpg 150w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-768x768.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-150x150@2x.jpg 300w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Boris-tan-and-white-smooth-fox-terrier-head-768x768@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>';
  bree.image = '<a href="https://www.foxterrier.co.nz/bree"><img loading="lazy" width="1600" height="1066" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Bree-Jaffa-Alaska-smooth-fox-terriers-1-1600x1066.jpg" alt="Bree-Jaffa-Alaska-smooth-fox-terriers sitting in a row" class="single-dog-photo-image wp-image-821" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Bree-Jaffa-Alaska-smooth-fox-terriers-1-1600x1066.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Bree-Jaffa-Alaska-smooth-fox-terriers-1-1200x800.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Bree-Jaffa-Alaska-smooth-fox-terriers-1-768x512.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Bree-Jaffa-Alaska-smooth-fox-terriers-1.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Bree-Jaffa-Alaska-smooth-fox-terriers-1-768x512@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>';
  coco.image = '<a href="https://www.foxterrier.co.nz/coco"><img loading="lazy" width="420" height="280" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Coco-very-small.jpg" alt="Coco - tan and white smooth fox terrier puppy in show stance" class="single-dog-photo-image wp-image-38"></a>';
  codie.image = '<a href="https://www.foxterrier.co.nz/codie"><img loading="lazy" width="370" height="407"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Codie-Tan-and-White-Fox-Terrier.jpg"alt="Codie-tan and white smooth fox terrier in show stance"class="single-dog-photo-image wp-image-192"></a>';
  cosmo.image = '<a href="https://www.foxterrier.co.nz/cosmo"><img loading="lazy" width="300" height="288"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-smooth-fox-terrier-Cosmo.jpg"alt="Cosmo-tan and white smooth fox terrier in show stance at beach"class="wp-image-497"></a>';
  cruz.image = '<a href="https://www.foxterrier.co.nz/cruz"><img loading="lazy" width="640" height="626"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Cruz_black-and-white-smooth-fox-terrier-show-dog.jpg"alt="Cruz- black and white smooth fox terrier in show stance"class="single-dog-photo-image wp-image-784"></a>'; 
  dash.image = '<a href="https://www.foxterrier.co.nz/dash"><img loading="lazy" width="420" height="280" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Dash-very-small.jpg" alt="dash - black and white smooth fox terrier puppy" class="single-dog-photo-image wp-image-967"></a>';
  demi.image = '<a href="https://www.foxterrier.co.nz/demi"><img loading="lazy" width="803" height="495"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Demi-winning-best-in-show.jpg"alt="Demi being presented Best In Show at the Fox Terrier Club, by judge Mr K Brown (NZ)"class="single-dog-photo-image-wp-image-897"srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Demi-winning-best-in-show.jpg 803w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Demi-winning-best-in-show-768x473.jpg 768w"sizes="(max-width: 803px) 100vw, 803px"></a>';
  eden.image = '<a href="https://www.foxterrier.co.nz/eden"><img loading="lazy" width="1600" height="1066" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-fox-terrier-puppy-1600x1066.jpg" alt="Tan and white fox terrier puppy with blaze" class="single-dog-photo-image wp-image-1058" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-fox-terrier-puppy-1600x1066.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-fox-terrier-puppy-1200x800.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-fox-terrier-puppy-768x512.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-fox-terrier-puppy.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-fox-terrier-puppy-768x512@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>'; 
  flame.image = '<a href="https://www.foxterrier.co.nz/flame"><img loading="lazy" width="440" height="411" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Eldery-Tan-and-white-fox-terrier-Flame.jpg" alt="Flame-elderly tan and white fox terrier in show stance" class="wp-image-492"></a>'; 
  frosty.image = '<a href="https://www.foxterrier.co.nz/frosty"><img loading="lazy" width="1333" height="2000" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Frosty-smooth-fox-terrier-with-pups.jpg" alt="Frosty-smooth fox terrier with her puppies" class="wp-image-103 single-dog-photo-image" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Frosty-smooth-fox-terrier-with-pups.jpg 1333w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Frosty-smooth-fox-terrier-with-pups-1200x1800.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Frosty-smooth-fox-terrier-with-pups-768x1152.jpg 768w" sizes="(max-width: 1333px) 100vw, 1333px"></a>'; 
  havoc.image = '<a href="https://www.foxterrier.co.nz/havoc"><img loading="lazy" width="321" height="300"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Havoc.jpg"alt="Havoc - tan and white smooth fox terrier in show stance"class="single-dog-photo-image wp-image-799"></a>'; 
  /*jade.image = '<a href="https://www.foxterrier.co.nz/jade"><img loading="lazy" width="369" height="292"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tan-and-white-smooth-fox-terrier-head-Jade.jpg"alt="Jade-portrait of an elderly tan and white smooth fox terrier"class="single-dog-phoyo-image wp-image-495"></a>'; 
  jaffa.image = '<a href="https://www.foxterrier.co.nz/jaffa"><img loading="lazy" width="1600" height="1066" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Jaffa-as-puppy-with-her-brother-1600x1066.jpg" alt="Jaffa with her brother on sheepskin" class="single-dog-photo-image wp-image-1037" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Jaffa-as-puppy-with-her-brother-1600x1066.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Jaffa-as-puppy-with-her-brother-1200x800.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Jaffa-as-puppy-with-her-brother-768x512.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Jaffa-as-puppy-with-her-brother.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Jaffa-as-puppy-with-her-brother-768x512@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>'; 
  jazz.image = '<a href="https://www.foxterrier.co.nz/jazz"><img loading="lazy" width="338" height="293" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-and-white-smooth-fox-terrier-Jazz.jpg" alt="Jazz-elderly black and white smooth fox terrier in show stance" class="single-dog-photo-image wp-image-501"></a>'; 
  kona.image = '<a href="https://www.foxterrier.co.nz/kona"><img loading="lazy" width="1600" height="1270" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Kona-black-and-white-fox-terrier-in-show-stance-1600x1270.jpg" alt="Kona-black and white fox terrier in show stance" class="single-dog-photo-image wp-image-1062" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Kona-black-and-white-fox-terrier-in-show-stance-1600x1270.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Kona-black-and-white-fox-terrier-in-show-stance-1200x952.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Kona-black-and-white-fox-terrier-in-show-stance-768x609.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Kona-black-and-white-fox-terrier-in-show-stance.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Kona-black-and-white-fox-terrier-in-show-stance-768x609@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>'; 
  kruger.image = '<a href="https://www.foxterrier.co.nz/kruger"><img loading="lazy" width="1600" height="1236" class="single-dog-photo-image wp-image-195" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Fox-Terrier-head-Kruger-1600x1236.jpg" alt="Kruger-tan and white smooth fox terrier portrait" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Fox-Terrier-head-Kruger-1600x1236.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Fox-Terrier-head-Kruger-1200x927.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Fox-Terrier-head-Kruger-768x593.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Fox-Terrier-head-Kruger.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Fox-Terrier-head-Kruger-768x593@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>'; 
  luca.image = '<a href="https://www.foxterrier.co.nz/luca"><img loading="lazy" width="800" height="637" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Luca-Black-and-white-smooth-fox-terrier-show-pose.jpg" alt="Luca- black and white smooth fox terrier in show pose" class="single-dog-photo-image wp-image-886" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Luca-Black-and-white-smooth-fox-terrier-show-pose.jpg 800w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Luca-Black-and-white-smooth-fox-terrier-show-pose-768x612.jpg 768w" sizes="(max-width: 800px) 100vw, 800px"></a>'; 
  memphis.image = '<a href="https://www.foxterrier.co.nz/memphis"><img loading="lazy" width="1200" height="802"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Memphis-smooth-fox-winning-at-National-Dog-Show.jpg"alt="Memphis-smooth fox terrier winning at National Dog Show"class="wp-image-488 single-dog-photo-image"srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Memphis-smooth-fox-winning-at-National-Dog-Show.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Memphis-smooth-fox-winning-at-National-Dog-Show-768x513.jpg 768w"sizes="(max-width: 1200px) 100vw, 1200px"></a>'; 
  mint.image = '<a href="https://www.foxterrier.co.nz/mint"><img loading="lazy" width="1600" height="1066"src="https:/www.foxterrier.co.nz/wp-content/uploads/2021/03/Mint-as-baby-1600x1066.jpg"alt="Smooth fox terrier baby puppies tearing apart a leopard toy"class="single-dog-photo-image wp-image-39"srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Mint-as-baby-1600x1066.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Mint-as-baby-1200x800.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Mint-as-baby-768x512.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Mint-as-baby.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Mint-as-baby-768x512@2x.jpg 1536w"sizes="(max-width: 1600px) 100vw, 1600px"></a>'; 
  misty.image = '<img loading="lazy" width="900" height="707"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Misty.jpg"alt="Misty-Black and white smooth fox terrier in show stance"class="wp-image-892 single-dog-photo-image"srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Misty.jpg 900w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Misty-768x603.jpg 768w"sizes="(max-width: 900px) 100vw, 900px">'; 
  piper.image = '<a href="https://www.foxterrier.co.nz/piper"><img loading="lazy" width="334" height="293" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Piper.jpg" alt="Piper-tan and white smooth fox terrier in show stance" class="wp-image-533 single-dog-photo-image"></a>'; 
  raven.image = '<a href="https://www.foxterrier.co.nz/raven"></a>'; 
  shiraz.image = '<a href="https://www.foxterrier.co.nz/shiraz"><img loading="lazy" width="720" height="540" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Shiraz-smooth-fox-terrier-show-stance.jpg" alt="Shiraz-Smooth fox terrier in show stance" class="single-dog-photo-image wp-image-854"></a>'; 
  shylo.image = '<a href="https://www.foxterrier.co.nz/shylo"><img loading="lazy" width="640" height="471"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Shylo-smooth-fox-terrier-show-stance.jpg"alt="Shylo - smooth fox terrier in show stance"class="wp-image-855 single-dog-photo-image"></a>'; 
  texas.image = '<a href="https://www.foxterrier.co.nz/texas"><img loading="lazy" width="400" height="341" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Texas.jpg" alt="Texas-tan and white smooth fox terrier in show stance" class="single-dog-photo-image wp-image-809"></a>'; 
  tia.image = '<a href="https://www.foxterrier.co.nz/tia"><img loading="lazy" width="1600" height="1066" src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-fox-terrier-and-golden-tiussock-1600x1066.jpg" alt="Black and white fox terrier puppy in front of golden tussock" class="single-dog-photo-image wp-image-1054" srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-fox-terrier-and-golden-tiussock-1600x1066.jpg 1600w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-fox-terrier-and-golden-tiussock-1200x800.jpg 1200w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-fox-terrier-and-golden-tiussock-768x512.jpg 768w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-fox-terrier-and-golden-tiussock.jpg 2000w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Black-fox-terrier-and-golden-tiussock-768x512@2x.jpg 1536w" sizes="(max-width: 1600px) 100vw, 1600px"></a>'; 
  tussock.image = '<a href="https://www.foxterrier.co.nz/tussock"><img loading="lazy" width="370" height="381"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/tan-and-white-smooth-fox-terrier-show-dog-collage.jpg"alt="Collage of Tussock- tan and white smooth fox terrier"class="single-dog-photo-image wp-image-771"></a>';  
  tyler.image = '<a href="https://www.foxterrier.co.nz/tyler"><img loading="lazy" width="889" height="667"src="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tyler-by-Cherie.jpg"alt="Tyler - tan and white show dog" class="single-dog-photo-image wp-image-949"srcset="https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tyler-by-Cherie.jpg 889w, https://www.foxterrier.co.nz/wp-content/uploads/2021/03/Tyler-by-Cherie-768x576.jpg 768w"sizes="(max-width: 889px) 100vw, 889px"></a>'
  */
  
  for (const dog of tamsam.dogs) {
    dog.tags = dog.tags.join(' | ');
    dog.summary = `<section class="single-dog-page">
    <article class="single-dog-container">
        <section class="single-dog-photo-section">
            <div class="single-dog-photo-section-contents">
                <div class="single-dog-photo-image-container">
                    <figure class="wp-block-image size-large">${dog.image}</figure>
                </div>
            </div>
        </section><!--end single-dog-photo-section-->
        <section class="single-dog-info-section">
            <div class="single-dog-photo-text-container">
                <span class="dog-category-tag-icon la la-tags"></span>
                <span class="dog-category-text">${dog.tags}</span>
                <div class="single-dog-photo-names">
                    <h2 class="h5">${dog.title}${dog.pedigreeName}</h2>
                    <h3><a href="https://www.foxterrier.co.nz/${dog.petName}" class="text-mid-2">${dog.petName}</a></h3>
                </div>
            </div><!--end single-dog-photo-text-container-->
            <div class="single-dog-info-section-contents">
                <div class="single-dog-info-content">
                    <div class="single-dog-info-row">
                        <span class="single-dog-info-icon-container">
                            <span class="single-dog-info-icon la la-calendar"></span>
                        </span>
                        <span class="single-dog-info-label">Date Of Birth:</span>
                        <span class="single-dog-info-value">${dog.dateDate} ${dog.dateMonth}
                            ${dog.dateYear}</span>
                    </div>
                    <div class="single-dog-info-row">
                        <span class="single-dog-info-icon-container">
                            <span class="single-dog-info-icon la la-bone"></span>
                        </span>
                        <span class="single-dog-info-label">Sex:</span>
                        <span class="single-dog-info-value">${dog.sex}</span>
                    </div>
                </div><!--end of single-dog-info-content-->
            </div><!--end of single-dog-info-section-contents-->
        </section><!--end of single-dog-info-section-->
        <section class="single-dog-pedigree-section">
            <div class="single-dog-section-header">
                <h6>Sire / Dam</h6>
            </div>
            <div class="single-dog-pedigree-contents">
                <div class="single-dog-info-row">
                    <span class="single-dog-info-icon-container">
                        <span class="single-dog-info-icon la la-dog"></span>
                    </span>
                    <span class="single-dog-info-label">Sire: </span>
                    <span class="single-dog-info-value">${dog.sire}</span>
                </div>
                <div class="single-dog-info-row">
                    <span class="single-dog-info-icon-container">
                        <span class="single-dog-info-icon la la-dog"></span>
                    </span>
                    <span class="single-dog-info-label">Dam:</span>
                    <span class="single-dog-info-value">${dog.dam}</span>
                </div>
            </div>
        </section>
    </article>
  </section>`;
  }
  
  /*
  const array1 = ['friend1', 'friend2', 'friend3', 'friend4'];
  const array2 = ['friend0', 'friend1', 'friend2'];
  let commonItems = []
  
  const findCommonItems = (array1, array2) => {
    array1.forEach(item => {
      if (array2.includes(item)) {
        commonItems.push(item);
      }
    });
  }
  
  findCommonItems(array1, array2);
  console.log(commonItems)*/
  
  const femaleDogs = tamsam.dogs.filter(dog => dog.sex === "Female");
  const maleDogs = tamsam.dogs.filter(dog => dog.sex === "Male");
  const tanDogs = tamsam.dogs.filter(dog => dog.colour === "Tan & White");
  const blackDogs = tamsam.dogs.filter(dog => dog.colour === "Black & White");
  const tamateaDogs = tamsam.dogs.filter(dog => dog.pedigreeName.includes("Tamatea") === true);
  const vipDogs = tamsam.dogs.filter(dog => dog.tags.includes(vip) === true);
  const petDogs = tamsam.dogs.filter(dog => dog.tags.includes(pet) === true);
  const grandChampionDogs = tamsam.dogs.filter(dog => dog.tags.includes(grandChampion) === true);
  const bestInShowDogs = tamsam.dogs.filter(dog => dog.tags.includes(bis) === true);
  const showDogs = tamsam.dogs.filter(dog => dog.tags.includes(showing) === true);
  const breedingDogs = tamsam.dogs.filter(dog => dog.tags.includes(breeding) === true);
  const vintageDogs = tamsam.dogs.filter(dog => dog.tags.includes(vintage) === true);
  const pastChampionDogs = tamsam.dogs.filter(dog => dog.tags.includes(pastChampion) === true);
  const championDogs = tamsam.dogs.filter(dog => dog.tags.includes(champion) === true);
  
  const ourDogsPage = document.getElementById('our-dogs-page');
  const ourDogsContainer = document.getElementById('our-dogs-container');
  const categoryContainer = document.getElementById('category-container');
  const allDogsButton = document.getElementById('show-all');
  const bisButton = document.getElementById('show-bis');
  const breedingButton = document.getElementById('show-breeding');
  const championButton = document.getElementById('show-champions');
  const pastChampionButton = document.getElementById('show-past-champions');
  const petButton = document.getElementById('show-pets');
  const showingButton = document.getElementById('show-showing');
  const vintageButton = document.getElementById('show-vintage');
  const vipButton = document.getElementById('show-vip');
  
  
  allDogsButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>All our dogs<h1>';
    ourDogsContainer.innerHTML = '';
    tamsam.dogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  bisButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Best in show</h1>';
    ourDogsContainer.innerHTML = '';
    bestInShowDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  breedingButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Breeding</h1>';
    ourDogsContainer.innerHTML = '';
    breedingDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  championButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Champions</h1>';
    ourDogsContainer.innerHTML = '';
    championDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  pastChampionButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Past Champions</h1>';
    ourDogsContainer.innerHTML = '';
    pastChampionDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  petButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Pets</h1>';
    ourDogsContainer.innerHTML = '';
    petDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  showingButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>In the show ring</h1>';
    ourDogsContainer.innerHTML = '';
    showDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  vintageButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Vintage champions</h1>';
    ourDogsContainer.innerHTML = '';
    vintageDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });
  
  vipButton.addEventListener('click', function () {
    categoryContainer.innerHTML = '<h1>Foundation V.I.P.</h1>';
    ourDogsContainer.innerHTML = '';
    vipDogs.forEach(dog => ourDogsContainer.innerHTML += dog.summary);
  });