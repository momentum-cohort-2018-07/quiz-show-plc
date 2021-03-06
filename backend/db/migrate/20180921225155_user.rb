class User < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :api_token
      t.boolean :admin

      t.timestamps
    end
    add_index :users, :api_token, unique: true
  end
end
