<?php defined("BASEPATH") or exit("No direct script access allowed");

class Welcome extends CI_Controller {
	public function index() {
		header("content-type: application/json; charset=utf-8");
		echo json_encode(array(
			"version" => "1.0",
			"message" => "Hello from Api Index",
		));
	}
}
