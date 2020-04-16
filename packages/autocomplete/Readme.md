```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-1"
  showSearchIcon={true}
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

The prop `defaultValue` can be used to show a default value when the component gets loaded.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-2"
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city">
</Autocomplete>
```

The prop `loading` can be used to show a loading indication.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-3"
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  loading={true}>
</Autocomplete>
```

The prop `disabled` can be used to disabled the autocomplete.
```
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-4"
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  disabled={true}>
</Autocomplete>
```

The prop `state` can be used to set error states
```
<div>
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-5"
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  state="error">
</Autocomplete>
<br />
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-6"
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  state="success">
</Autocomplete>
<br />
<Autocomplete
  items={[
    { label: "Antwerpen", value: "antwerpen"},
    { label: "Gent", value: "gent"},
    { label: "Brussel", value: "brussel"},
    { label: "Brugge", value: "brugge"},
    { label: "Hasselt", value: "hasselt"},
    { label: "Luik", value: "luik"},
    { label: "Oostende", value: "oostende"},
    { label: "Namen", value: "namen"},
    { label: "Mechelen", value: "mechelen"},
    { label: "Sint-Niklaas", value: "sint-niklaas"},
    { label: "Aalst", value: "aalst"},
    { label: "Genk", value: "genk"}
  ]}
  id="autocomplete-7"
  defaultValue="oostende"
  onSelection={(selected) => {console.log(`Selected ${selected}`)}}
  onChange={(value) => {console.log(`Typed ${value}`)}}
  label="Select a city"
  state="warning">
  </Autocomplete>
</div>
```
