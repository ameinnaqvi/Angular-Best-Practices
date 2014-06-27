app.value('toastr', toastr);
app.value('followedInstructors', [
  {id: 1, name: 'Professor Snape'},
  {id: 2, name: 'Professor McGonagall'},
  {id: 3, name: 'Professor Dumbledore'}
]);
app.value('schedule', [
]);

app.value('catalog', [
  {id:1, name: "70's Studies", credits: 3, instructorName: 'Professor Trelawney', registered: false},
  {id:2, name: 'Aeronautics', credits: 5, instructorName: 'Professor Hooch', registered: false},
  {id:3, name: 'Care of Ordinary Creatures', credits: 2, instructorName: 'Professor Grubbly-Plank', registered: false},
  {id:4, name: 'Plagarism in the 21st century', credits: 4, instructorName: 'Professor Lockhart', registered: true},
  {id:5, name: 'Defense Against the Dim Arts', credits: 1, instructorName: 'Professor Lupin', registered: false},
  {id:6, name: 'Chemistry', credits: 5, instructorName: 'Professor Slughorn', registered: false},
  {id:7, name: 'Pharmaceutical Analysis', credits: 3, instructorName: 'Professor Snape', registered: true},
  {id:8, name: 'Advanced Fertilization Techniques 1', credits: 5, instructorName: 'Professor Sprout', registered: false},
])