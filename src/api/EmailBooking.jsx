export const emailBooking = (castle) => {
    const line = '%0A';
    const space = '%20';
  
    const body =
      'Hi,' + line + line +
      `Thank${space}you${space}for${space}your${space}interest${space}in${space}the${space}${castle.name}${space}inflatable.` + line + line +
      'Please' + space + 'answer' + space + 'the' + space + 'following:' + line +
      `- Date${space}of${space}event:` + line +
      `- Event${space}type:` + line +
      `- Number${space}of${space}children${space}attending:` + line +
      `- Contact${space}number:` + line +
      `- Would${space}you${space}like${space}to${space}keep${space}the${space}inflatable${space}overnight?${space}(Yes/No)` + line + line +
      `Please${space}add${space}any${space}other${space}information${space}or${space}questions` + line + line +
      'Thanks!';
  
    const subject = 'Booking Enquiry';
  
    return `mailto:hello@yourcastle.co.uk?subject=${subject.replace(/ /g, space)}&body=${body}`;
  };