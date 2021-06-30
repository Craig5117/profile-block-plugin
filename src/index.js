import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('plugin/profile-block', {
    title: 'Profile Block',
    icon: 'id',
    category: 'common',
    // attributes: {
    //   profileHeading: {type: 'string'},
    //   profileImage: {type: 'string'},
    // },
    edit() {
		const blockProps = useBlockProps();
        const TEMPLATE = 
        [  ['core/group', { className:"profile-container" }, [
            ['core/heading', { className:"profile-header" }],
			['core/group', { className:"profile-main" }, [
                    [ 'core/image', { className: "profile-image"}],
                 
				['core/group', { className:"profile-details" }, [
					[ 'core/list', {className: "profile-list", placeholder: 'You can list details here...'} ],
                    [ 'core/paragraph', { className: "profile-info", placeholder: 'Enter some information here...' } ],
                ] ],
            ] 
        ]
    ]
]];
		return (
			<div { ...blockProps }>
				<InnerBlocks template={TEMPLATE}/>                
			</div>
		);
	},

	save() {
		const blockProps = useBlockProps.save();

		return (
			<div { ...blockProps }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
  