<?php 

add_action( 'wp_enqueue_scripts', 'body_line_style' );
add_action( 'wp_enqueue_scripts', 'body_line_javascript' );

function body_line_style() {
	// подключаем файл стилей темы
	wp_enqueue_style( 'style-main', get_template_directory_uri() . '/assets/css/style.min.css' );
}



function body_line_javascript() {

	wp_deregister_script('jquery');
	wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
	wp_enqueue_script('jquery');

	wp_enqueue_script( 'script-mail', get_template_directory_uri() . '/assets/js/mail.js', array(jquery), null, true );
	wp_enqueue_script( 'script-javascript', get_template_directory_uri() . '/assets/js/script.min.js', array(jquery), null, true );
}





