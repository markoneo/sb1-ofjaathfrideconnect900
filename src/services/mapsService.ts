import { GOOGLE_MAPS_CONFIG } from '../config/maps';

export const createAutocomplete = (
  input: HTMLInputElement
): google.maps.places.Autocomplete | null => {
  try {
    const { places } = window.google.maps;
    if (!places?.Autocomplete) {
      console.error('Google Maps Places API not loaded');
      return null;
    }

    // Create autocomplete with establishment and geocode types
    const autocomplete = new places.Autocomplete(input, {
      fields: ['formatted_address', 'geometry', 'name'],
      types: ['establishment', 'geocode'],
      componentRestrictions: { country: ['si', 'hr', 'it', 'at'] }
    });

    // Prevent form submission on enter
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      }
    });

    return autocomplete;
  } catch (error) {
    console.error('Error creating autocomplete:', error);
    return null;
  }
};