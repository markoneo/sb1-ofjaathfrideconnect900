interface Window {
  embeddedChatbotConfig?: {
    chatbotId: string;
    domain: string;
  };
  google: {
    maps: {
      importLibrary: (library: string) => Promise<any>;
      places?: {
        Autocomplete: new (
          input: HTMLInputElement,
          options?: google.maps.places.AutocompleteOptions
        ) => google.maps.places.Autocomplete;
      };
    };
  };
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}