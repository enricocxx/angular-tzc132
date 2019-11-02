<?php 

add_theme_support( 'post-thumbnails' ); 

/* add new option to json - for displaying of Featured posts */
add_action( 'rest_api_init', 'add_thumbnail_to_JSON' );
function add_thumbnail_to_JSON() {
	//Add featured image
	register_rest_field( 
	    array( 'music', 'blog', 'premotavanje', 'citati'), // Where to add the field (Here, blog posts. Could be an array)
	    'featured_image_src', // Name of new field (You can call this anything)
	    array(
	        'get_callback'    => 'get_image_src',
	        'update_callback' => null,
	        'schema'          => null,
	         )
	);
}

function get_image_src( $object, $field_name, $request ) {
  $feat_img_array = wp_get_attachment_image_src(
    $object['featured_media'], // Image attachment ID
    'medium-large',  // Size.  Ex. "thumbnail", "large", "full", etc..
    true // Whether the image should be treated as an icon.
  );
  return $feat_img_array[0];
}

add_action('rest_api_init', 'add_number_of_posts');

function add_number_of_posts() {
	register_rest_field( 
	    array( 'music', 'blog', 'premotavanje', 'citati'),  
	    'number_of_posts',
	     array(
	        'get_callback'    => 'count_number_of_blog_posts',
	        'update_callback' => null,
	        'schema'          => null,
	         )
	);
}

function count_number_of_blog_posts() {
	// $number_of_posts = wp_count_posts('blog');
	if ( isset( $_GET['type'] ) ) {
		if ( $_GET['type'] == 'blog' ) {
			return wp_count_posts('blog');
		} else if ( $_GET['type'] == 'premotavanje') {
			if ( $_GET['kategorije'] == 191 ) {
				//191 = muzika
				$category = get_terms( array(
					'taxonomy' => 'kategorije',
					'slug' => 'muzika'
				));
				$count = $category[0]->count;
				return $count;
			} else if ( $_GET['kategorije'] == 190 ) {
				//190 = knjige
				$category = get_terms( array(
					'taxonomy' => 'kategorije',
					'slug' => 'knjige'
				)); 
				$count = $category[0]->count;
				return $count;
			}	
		} else if ( $_GET['type'] == 'blog/tagovi' ) {
			$args = array(
			  'tag_id' => $_GET['tags'],
			  'post_type' => 'blog'
			);
			$the_query = new WP_Query( $args );
			return $the_query->found_posts;
		} else if ( $_GET['type'] == 'premotavanje/tagovi' ) {
			$args = array(
			  'tag_id' => $_GET['tags'],
			  'post_type' => 'premotavanje'
			);
			$the_query = new WP_Query( $args );
			return $the_query->found_posts;
		} else if ( $_GET['type'] == 'b1t0v11bajt0v1/tagovi' ) {
			$args = array(
			  'tag_id' => $_GET['tags'],
			  'post_type' => 'b1t0v11bajt0v1'
			);
			$the_query = new WP_Query( $args );
			return $the_query->found_posts;
		} else if ( $_GET['type'] == 'search_blog') {
			$search_term = $_GET['search'];
			$args = array(
			  's' => $search_term,
			  'showposts' => '-1',
			  'post_type' => 'blog'
			);
			 $allsearch = new WP_Query( $args ); 
			 $count = $allsearch->post_count;
			 return $count;
		}
	}
	return 'number of posts not defined';
}

/* end of add */


/* add tag name field to JSON */
add_action( 'rest_api_init', 'add_tag_name_to_b1b_JSON' );
function add_tag_name_to_b1b_JSON() {
	register_rest_field( 
	    'b1t0v11bajt0v1', // Where to add the field (Here, blog posts. Could be an array)
	    'tags_name', // Name of new field (You can call this anything)
	    array(
	        'get_callback'    => 'get_tag_names',
	        'update_callback' => null,
	        'schema'          => null,
	         )
	    );
}

add_action( 'rest_api_init', 'add_tag_name_to_blog_JSON' );
function add_tag_name_to_blog_JSON() {
	register_rest_field( 
	    'blog', // Where to add the field (Here, blog posts. Could be an array)
	    'tags_name', // Name of new field (You can call this anything)
	    array(
	        'get_callback'    => 'get_tag_names',
	        'update_callback' => null,
	        'schema'          => null,
	         )
	    );
}

add_action( 'rest_api_init', 'add_tag_name_to_reviews_JSON' );
function add_tag_name_to_reviews_JSON() {
	register_rest_field( 
	    'premotavanje', // Where to add the field (Here, blog posts. Could be an array)
	    'tags_name', // Name of new field (You can call this anything)
	    array(
	        'get_callback'    => 'get_tag_names',
	        'update_callback' => null,
	        'schema'          => null,
	         )
	    );
}

function get_tag_names( $object ) {	
  $feat_img_array = get_the_tags( $object['id'] );
  return $feat_img_array;
}
/* end of adding tag name */


/* add category name to Premotavanje section */
// add_action( 'rest_api_init', 'add_category_name_to_reviews' );
// function add_category_name_to_reviews() {
// 	register_rest_field(
// 		'premotavanje',
// 		'category_name',
// 		array(
// 			'get_callback'    => 'get_category_names',
// 			'update_callback' => null,
// 			'schema'           => null,
// 		)
// 	);
// }
// function get_category_names( $object ) {	
//   $category_name = get_the_category( $object['id'] );
//   return $category_name[0]->name;
// }

/* end of adding category name */


// add_filter( 'rest_prepare_post', 'ag_filter_post_json', 10, 3 );



/* create custom post types */
function create_post_type() {
	/*register programming post type*/
	register_post_type(__("B1t0v1 1 bajt0v1"),
		array(
			'labels'=>array(
				'name'=>__( "B1t0v1 1 bajt0v1" ),
				'singular_name'=>__( "B1t0v1 1 bajt0v1" )
			),
			'show_in_rest'=>true,
			'supports' =>  array('title', 'editor', 'author','thumbnail', 'excerpt', 'custom-fields', 'comments', 'revisions','post-formats', 'taxonomies', 'has_archive'),
			'taxonomies' => array('category','post_tag'),
			'public'=>true,
			'has_archive'=>true,
		)
	);

	/* register blog post type */
	register_post_type('blog',
		array(
			'labels' => array(
				'name' => __( 'Blog' ),
				'singular_name' => __( 'Kobi\'s blog' ),

			),
			'show_in_rest'=>true,
			'supports' =>  array('title', 'editor', 'author','thumbnail', 'excerpt', 'custom-fields', 'comments', 'revisions','post-formats', 'taxonomies', 'has_archive'),
			'taxonomies' => array('category', 'post_tag'),
			'public' => true,
			'has_archive' => true,		
		)
	);

	/* register Reviews post type*/
	register_post_type('premotavanje',
		array(
			'labels' => array(
				'name' => __( 'Premotavanje' ),
				'singular_name' => __( 'Premotavanje' ),

			),
			'show_in_rest'=>true,
			'supports' => array('title', 'editor', 'author','thumbnail', 'excerpt', 'custom-fields', 'comments', 'revisions','post-formats', 'taxonomies', 'has_archive'),
			'taxonomies' => array('category', 'premotavanje', 'post_tag'),
			'public' => true,
			'has_archive' => true,
		)
	);

	/* register custom taxonomy for Premotavanje CPT */
	$labels = array(
		'name'              => _x( 'Premotavanje - kategorije', 'taxonomy general name', 'textdomain' ),
		'singular_name'     => _x( 'Premotavanje', 'taxonomy singular name', 'textdomain' ),
		'search_items'      => __( 'Search Premotavanje', 'textdomain' ),
		'all_items'         => __( 'All Premotavanje', 'textdomain' ),
		'parent_item'       => __( 'Parent Premotavanje', 'textdomain' ),
		'parent_item_colon' => __( 'Parent Premotavanje:', 'textdomain' ),
		'edit_item'         => __( 'Edit Premotavanje', 'textdomain' ),
		'update_item'       => __( 'Update Premotavanje', 'textdomain' ),
		'add_new_item'      => __( 'Add New Premotavanje', 'textdomain' ),
		'new_item_name'     => __( 'New Premotavanje Name', 'textdomain' ),
		'menu_name'         => __( 'Premotavanje', 'textdomain' ),
	);
	$args = array(
		'hierarchical'       => true,
		'labels'            => $labels,
		'show_ui'           => true,
		'show_in_rest'      => true,
		'show_admin_column' => true,
		'query_var'         =>  true
	);
	register_taxonomy( "kategorije", array('premotavanje'), $args );

	/* register Citation post type*/
	register_post_type('citati',
		array(
			'labels' => array(
				'name' => __( 'Citati' ),
				'singular_name' => __( 'Citati' ),

			),
			'show_in_rest'=>true,
			'supports' => array('title', 'editor', 'author','thumbnail', 'excerpt', 'custom-fields', 'comments', 'revisions','post-formats', 'taxonomies', 'has_archive'),
			'taxonomies' => array('category', 'post_tag'),
			'public' => true,
			'has_archive' => true,
		)
	);


	/* Add tags to 'Programiranje' custom post type*/
	$labels = array(
		'name'=>_x('Programiranje tags', 'taxonomy general name')
	);
	register_taxonomy('tag','Programiranje', array(
		'hierarchical' => false,
		'labels' => $labels,
		'show_ui'=>true,
		'update_count_callback'=>'_update_post_term_count',
		'query_var'=>true,
		'rewrite' => array('slug'=>'tag'),
	));
	
	/* Add tags to music custom post type*/
	$labels = array(
		'name'=> _x('Music tags','taxonomy general name')
	);
	register_taxonomy('tag', 'music', array(
		'hierarchical' => false,
		'labels' => $labels,
		'show_ui'=>true,
		'update_count_callback'=>'_update_post_term_count',
		'query_var'=>true,
		'rewrite' => array('slug'=>'tag'),
	));
}
add_action('init', 'create_post_type');

?>
