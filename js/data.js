techniques = [
    {
        name: "Glass Menus",
        description: "Glass menus description"
    },
];

descriptions = [ 
    {
        name: "MCBi-r",
        description: "Adaptive menus are menus presenting selectable options considering a recommandation process. Multiple variants of adaptive menus will be presented to you during this experiment. Read carefully each menu description and compare each pair to select your preference."
    },
{ name: 'BHBi-r',
    description: 'Predicted menu items are blinking to make them more salient' },
  { name: 'BHUni-l',
    description: 'Menu items with low prediction are blurred to make them less salient' },
  { name: 'MCUni-l',
    description: 'Bolding menus are another form where predicted items are boldfaced. A split menu, a bolding menu, an adaptable menu, and a traditional menu were compared for a normal screen. This study showed that the adaptable menu outperformed the other menus in terms of overall performance and subjective satisfaction. Different forms of emphasizing items in the predicted window may be investigated, such as by highlighting, by underlying, by bolding, by italicizing, etc. The design space that will be later defined will enable us to investigate these options more extensively.' },
  { name: 'MHBi-r',
    description: 'Menu items with high prediction are framed into a box' },
  { name: 'MHUni-l',
    description: 'Bubbling menus represent a design for cascading drop-down menus aimed at accelerating the selection of the frequently used items by directly jumping to them one by one. To this end, two techniques are combined: the bubble cursor, whose size dynamically changes as the cursor moves and selects the target within the closest distance, especially for frequently-based items; and directional mouse-gesture techniques, which accelerate reaching predicted items.' },
  { name: 'MRBi-r', description: 'Cloud Menus are a split adaptive menu for small screens where the predicted menu items are arranged in a circular tag cloud with a location consistent with their corresponding position in the static menu and a font size depending on their prediction level. An empirical study suggests that cloud menus reduce item selection time and error rate when prediction is correct without penalizing it when prediction is incorrect, compared to two baselines: a non-adaptive static menu and an adaptive linear menu.' },
  { name: 'MRUni-r',
    description: 'Ephemeral menus is an adaptive temporal menu where the gradual onset was used in order to display non-predicted items. At opening the menu, user finds predicted items and after a delay of 500ms remaining items appear gradually.' },
  { name: 'MVBi-l',
    description: 'Evanescent menus are adaptive menu where the prediction window is first presented superimposed to the initial menu and then progressively made transparent to reveal the menu, thus enabling the user to select a predicted item if it belongs to the prediction window and the initial menu after.' },
  { name: 'MVUni-r',
    description: 'Fish-eye menus display items with a font size that increases or decreases depending on the distance with respect to cursor position: the closer, the larger, the further, the smaller. Per se, fish-eye menus are not adaptive since their layout does not change depending on predicted items. They are able to increase the selection area of any item, which might be useful for predicted items.' },
  { name: 'SVBi-l',
    description: 'Fish-eye menus display items with a font size that increases or decreases depending on the distance with respect to cursor position: the closer, the larger, the further, the smaller. Per se, fish-eye menus are not adaptive since their layout does not change depending on predicted items. They are able to increase the selection area of any item, which might be useful for predicted items.' },
  { name: 'SVUni-r',
    description: 'Flower menus extend marking menus with opportunity to draw straight lines or curved ones into the eight cardinal directions of a compass, which can optionally be terminated by bended, cusped, and pig-tail endings. A comparative study of flower, linear and polygon menus shows that polygon and flower menus offer better performance for learning in expert mode as compared to linear menus.' },
  { name: 'THBi-l',
    description: 'Menu items with high prediction see their font changed to make them more salient' },
  { name: 'THUni-l',
    description: 'Frequency-based menus sort items by decreasing order of frequency, depending on the end user’s actions, thus promoting MFU. They are probably the first manifestation of adaptive menu in history during the 1980’s with the probability-based menus.' },
];
