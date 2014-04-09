versions
version010: spec
    <version: '0.1.0'>
    spec
        for: #'common'
        do: [ 
            spec blessing: #'development'.
            spec
                baseline: 'Tide'
                    with: [ 
                            spec
                                className: 'BaselineOfTide';
                                loads: #();
                                repository:
                                        'github://tide-framework/tide:master' ];
                import: 'Tide' ]