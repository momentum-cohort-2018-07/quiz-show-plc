require 'test_helper'

class AnswersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get answers_index_url
    assert_response :success
  end

  test "should get create" do
    get answers_create_url
    assert_response :success
  end

  test "should get udpate" do
    get answers_udpate_url
    assert_response :success
  end

  test "should get destroy" do
    get answers_destroy_url
    assert_response :success
  end

end
