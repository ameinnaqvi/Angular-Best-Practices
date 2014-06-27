app.value('toastr', toastr);

app.value('instructorList', [
  { id: 1, name: 'Professor Snape' },
  { id: 2, name: 'Professor McGonagall' },
  { id: 3, name: 'Professor Dumbledore' }
]);
app.value('schedule', [
  { id: 1, name: 'Aquatic Juggling', credits: 4 },
  { id: 2, name: 'Ancient Philistine Music', credits: 2 },
  { id: 3, name: 'Advanced Ninja Killing Blows', credits: 5 }
]);

app.value('catalog', [
  { id: 1, name: "70's Studies", credits: 3, instructorName: 'Professor Trelawney' },
  { id: 2, name: 'Aeronautics', credits: 5, instructorName: 'Professor Hooch' },
  { id: 3, name: 'Care of Ordinary Creatures', credits: 2, instructorName: 'Professor Grubbly-Plank' },
  { id: 4, name: 'Plagarism in the 21st century', credits: 4, instructorName: 'Professor Lockhart' },
  { id: 5, name: 'Defense Against the Dim Arts', credits: 1, instructorName: 'Professor Lupin' },
  { id: 6, name: 'Chemistry', credits: 5, instructorName: 'Professor Slughorn' },
  { id: 7, name: 'Pharmaceutical Analysis', credits: 3, instructorName: 'Professor Snape' },
  { id: 8, name: 'Advanced Fertilization Techniques 1', credits: 5, instructorName: 'Professor Sprout' },
{ id: 9, name: 'Aquatic Juggling', credits: 4, instructorName: 'Professor Lupin', registered: true },
{ id: 10, name: 'Ancient Philistine Music', credits: 2, instructorName: 'Professor Lupin', registered: true },
{ id: 11, name: 'Advanced Ninja Killing Blows', credits: 5, instructorName: 'Professor Lupin', registered: true }
]);